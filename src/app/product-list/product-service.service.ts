import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  NewBuy(price:number,prodID:number,qty:number,total:number,TotalOrder:EventEmitter<number>){
    let id =String(prodID);
    const input = document.getElementById(id) as HTMLInputElement;
    let count = 0;
    count = + input?.value;

    if(count){
      if( qty > 0 && qty - count >= 0)
      {
        total += price * count;
        TotalOrder.emit(total);
      }
    }
  }
  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
}
