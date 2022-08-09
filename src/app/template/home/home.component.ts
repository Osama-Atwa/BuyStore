import { Component, OnInit } from '@angular/core';
import {ProductModule} from '../../Models/product/product.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img: string = '../../../assets/img1.jpg';
  count: number = 0;
  products = [
    {product: new ProductModule(0,'S10','../../../assets/s10.jpg',1,10000,'mobile') , count: 0, sum: 0},
    {product: new ProductModule(1,'S20','../../../assets/s20.jpg',0,20000,'mobile') , count: 0, sum: 0},
    {product: new ProductModule(2,'Dell','../../../assets/Dell.jpg',5,10000,'laptop') , count: 0, sum: 0},
    {product: new ProductModule(3,'Lenovo','../../../assets/lenovo.jpg',6,20000,'laptop') , count: 0, sum: 0}
  ];
  product:string='mobile';
  total:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  ToggleSrc(){
    if(this.img === '../../../assets/img1.jpg')
    {
      this.img = '../../../assets/img2.jpg';
    }
    else{
      this.img = '../../../assets/img1.jpg';
    }
  }

  AddToTotal(productPrice:number){
    this.total += productPrice;
  }

  OnBuy(id:number){
    var x = this.products.filter(x=>x.product.id==id);
    if(x[0] && x[0].product.qty>0 && x[0].product.qty - x[0].count >= 0)
    {
      x[0].sum = x[0].count * x[0].product.Price;
      if(x[0].product.qty > 0)
      {
        x[0].product.qty = x[0].product.qty - x[0].count;
      }
      this.calTotal();
    }

  }
  calTotal(){
    // this.total=0;
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      this.total += element.sum;
    }
  }

  OnMobile(){
    this.product = 'mobile';
  }
  OnLap(){
    this.product = 'laptop';
  }
}
