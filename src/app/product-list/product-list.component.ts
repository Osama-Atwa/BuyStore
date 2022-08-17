import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../Services/test.service';
import { ProductServiceService } from '../Services/product-service.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
res:any;
@Input() CategoryID:number=0;
total:number = 0;
// productServiceService: ProductServiceService = new ProductServiceService(this.http);
@Output() TotalOrder = new EventEmitter<number>();
  constructor(private http:HttpClient,private productServiceService:ProductServiceService, private ds: DataService)
  {

  }

  ngOnInit(): void {
    // let prods;
    this.productServiceService.getProducts().subscribe((response)=>{
      this.res = response;
    });
  }

  OnNewBuy(price:number,prodID:number,qty:number)
  {
    this.productServiceService.NewBuy(price,prodID,qty,this.total,this.TotalOrder);
    this.total=0;
  }
  SendID(ID:number){
    console.log(ID);
    this.ds.sendData(ID);
  }

}
