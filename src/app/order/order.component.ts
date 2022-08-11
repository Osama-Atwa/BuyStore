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

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  OnCategory(){
    if(this.selectedOption === 'mobile')
    {
      this.product = 1;
    }
    else if( this.selectedOption === 'laptop')
    {
      this.product = 2;
    }
  }
  AddToTotal(orderTotal : number){
    this.total += orderTotal;
  }
}
