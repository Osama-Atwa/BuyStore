import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductModule} from '../Models/product/product.module';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prod:ProductModule = new ProductModule(1,"",'',0,0,0);
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    console.log(this.prod);
    this.prod.CategoryID = +this.prod.CategoryID;
    this.http.post('http://localhost:3000/products',this.prod).subscribe(response=>{
      console.log(response);
    });
  }
}
