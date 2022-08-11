import { Injectable } from '@angular/core';
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
}
