import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() res:any;
@Input() CategoryID:number=1;
total:number = 0;
@Output() TotalOrder = new EventEmitter<number>();
  constructor(private http:HttpClient)
  {

  }

  ngOnInit(): void {
    let svc = new TestService(this.http);
    // let prods;
    svc.getProducts().subscribe((response)=>{
      this.res = response;
    });
  }

  OnNewBuy(price:number,prodID:number,qty:number)
  {
    let id =String(prodID);
    const input = document.getElementById(id) as HTMLInputElement;
    let count = 0;
    count = + input?.value;

    console.log(qty);
    console.log(count);

    if(count){
      if( qty > 0 && qty - count >= 0)
      {
        this.total += price * count;
        this.TotalOrder.emit(this.total);
        this.total = 0;
      }
    }
  }
}
