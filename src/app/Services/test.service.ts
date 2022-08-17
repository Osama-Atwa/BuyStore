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



  // CategorySelection(selectedOption:number,product:number){
  //   if(selectedOption === )
  //   {
  //     product = 1;
  //   }
  //   else if( selectedOption === 'laptop')
  //   {
  //     product = 2;
  //   }
  //   return product;
  // }
}
