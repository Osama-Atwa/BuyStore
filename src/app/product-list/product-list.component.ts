import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
res:any;
@Input() CategoryID:number=0;
total:number = 0;
svc: ProductServiceService = new ProductServiceService(this.http);
@Output() TotalOrder = new EventEmitter<number>();
  constructor(private http:HttpClient)
  {

  }

  ngOnInit(): void {
    let svc = new ProductServiceService(this.http);
    // let prods;
    svc.getProducts().subscribe((response)=>{
      this.res = response;
    });
  }

  OnNewBuy(price:number,prodID:number,qty:number)
  {
    this.svc.NewBuy(price,prodID,qty,this.total,this.TotalOrder);
    this.total=0;
  }
}
