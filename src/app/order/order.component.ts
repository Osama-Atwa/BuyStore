import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../Services/test.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedOption:number = 0;
  options:any ;
  total:number=0;
  product:number =0;
  svc:TestService = new TestService(this.http);
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:3000/categories').subscribe((response)=>{
    this.options = response;
  });
  }

  ngOnInit(): void {
  }

  OnCategory(){
    this.product = +this.product;
    console.log(this.product);
  }
  AddToTotal(orderTotal : number){
    this.total += orderTotal;
  }
}
