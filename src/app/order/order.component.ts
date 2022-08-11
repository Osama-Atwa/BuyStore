import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedOption:string='';
  options = [{name:'mobile'},{name:'laptop'}];
  total:number=0;
  product:number =0;
  svc:TestService = new TestService(this.http);
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  OnCategory(){
    this.product = this.svc.CategorySelection(this.selectedOption,this.product);
  }
  AddToTotal(orderTotal : number){
    this.total += orderTotal;
  }
}
