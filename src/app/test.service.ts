import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  res:any;
  constructor(private http:HttpClient) { }
  printToConsole(arg:any){
    console.log(arg);
  }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
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
  CategorySelection(selectedOption:string,product:number){
    if(selectedOption === 'mobile')
    {
      product = 1;
    }
    else if( selectedOption === 'laptop')
    {
      product = 2;
    }
    return product;
  }
}
