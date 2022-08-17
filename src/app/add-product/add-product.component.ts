import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {ProductModule} from '../Models/product/product.module';
import { Subscription } from 'rxjs';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prod:ProductModule = new ProductModule(0,"",'',0,0,0);

  @Input() dataPassed: number = 0;
  Edit:boolean=false;
  // subscription: Subscription;

  constructor(private http:HttpClient,private route:ActivatedRoute, private ds: DataService)
  {
  }


  ngOnInit(): void {

  }
  OnSubmit(){
    this.prod.id = +this.route.paramMap.subscribe(params =>{
      this.prod.id = +params.get('id')!;
      if(this.prod.id === 0)
      {
        this.prod.CategoryID = +this.prod.CategoryID;
        this.http.post('http://localhost:3000/products',this.prod).subscribe(response=>{
        });
      }
      else{
        this.prod.CategoryID = +this.prod.CategoryID;
        this.http.post('http://localhost:3000/products/edit',this.prod).subscribe(response=>{
        });
      }
    });


  }
}
