import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import {ProductModule} from '../../Models/product/product.module';
import { HttpClient } from '@angular/common/http';
import { TestService } from 'src/app/test.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges{

  img: string = '../../../assets/img1.jpg';
  selectedOption:string='';
  options = [{name:'mobile'},{name:'laptop'}];
  count: number = 0;
  products = [
    {product: new ProductModule(0,'S10','../../../assets/s10.jpg',1,10000,1) , count: 0, sum: 0}
  ];
  product:number=1;
  total:number=0;
  prods:[]= [];
  res:any;
  constructor(private http:HttpClient) {

  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }



  // OnBuy(id:number){
  //   var x = this.products.filter(x=>x.product.id==id);
  //   if(x[0] && x[0].product.qty>0 && x[0].product.qty - x[0].count >= 0)
  //   {
  //     x[0].sum = x[0].count * x[0].product.Price;
  //     if(x[0].product.qty > 0)
  //     {
  //       x[0].product.qty = x[0].product.qty - x[0].count;
  //     }
  //     this.calTotal();
  //   }
  // }
  // OnNewBuy(price:number,prodID:number,qty:number){
  //   let id =String(prodID);
  //   const input = document.getElementById(id) as HTMLInputElement;
  //   let count = 0;
  //   count = + input?.value;
  //   console.log(qty);
  //   console.log(count);
  //   if(count){
  //     if( qty > 0 && qty - count >= 0)
  //     {
  //       this.total += price * count;
  //       console.log(this.total);
  //     }
  //   }
  // }
  // calTotal(){
  //   // this.total=0;
  //   for (let index = 0; index < this.products.length; index++) {
  //     const element = this.products[index];
  //     this.total += element.sum;
  //   }
  // }
  // OnCategory(){
  //   if(this.selectedOption === 'mobile')
  //   {
  //     this.product = 1;
  //   }
  //   else if( this.selectedOption === 'laptop')
  //   {
  //     this.product = 2;
  //   }
  //   let svc = new TestService(this.http);
  //   // let prods;
  //   let res = svc.getProducts().subscribe((response)=>{
  //     this.res = response;
  //     console.log(this.res[0]);
  //   });
  // }

}
