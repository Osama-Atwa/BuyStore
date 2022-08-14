import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModule } from '../Models/product/product.module';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:number=0;
  prID:number = 0;
  nxID:number = 0;
  prod!: ProductModule;
  constructor(private http:HttpClient,private route:ActivatedRoute) {}

  ngOnInit(): void
  {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.prID = this.id-1;
    this.nxID = this.id+1;
    let params = new HttpParams().set("id",this.id);
    this.http.get<ProductModule>('http://localhost:3000/product',{params:params}).subscribe(response=>{
      this.prod = response!;
    });
  }
}
