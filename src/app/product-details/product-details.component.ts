import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModule } from '../Models/product/product.module';
import { ProductComponent } from '../product/product.component';
import { ProductdetailsService } from '../Services/productdetails.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:number=0;
  prID:number = 0;
  nxID:number = 0;
  prProd!: ProductModule;
  nxProd!: ProductModule;
  prod!: ProductModule;
  constructor(private http:HttpClient,private route:ActivatedRoute, private productdetailsService:ProductdetailsService) {

  }

  ngOnInit(): void
  {
    this.id = +this.route.paramMap.subscribe(params =>{
      this.id = +params.get('id')!;
      this.prID = this.id-1;

      if(this.prID === 0 )
      {
        this.prID = 1;
      }
      this.nxID = this.id+1;
      if(this.nxID === 11 )
      {
        this.nxID = 10;
      }

      this.productdetailsService.loadPage(this.id).subscribe(response=>{
        this.prod = response;
        console.log(this.prod.Name);
      });

      //previous
      // if(this.prID != 0)
      // {
      //   this.productdetailsService.loadPrev(this.prID).subscribe(response=>{
      //     this.prProd = response!;
      //   });
      // }
      // //next
      // if(this.nxID != 0)
      // {
      //   this.productdetailsService.loadPrev(this.nxID).subscribe(response=>{
      //     this.nxProd = response!;
      //   });
      // }
    });
  }

  OnPrev(){
    this.nxID = this.id;
    this.id = this.prID;
    this.nxProd = this.prod;
    this.prod = this.prProd;
    console.log(this.prID);
    if(this.prID != 1)
    {
      this.prID -= 1;
      this.productdetailsService.loadPrev(this.prID).subscribe(response=>{
        this.prProd = response!;
      });
    }
  }

  OnNext(){
    this.prID = this.id;
    this.id = this.nxID;
    this.prProd = this.prod;
    this.prod = this.nxProd;
    console.log(this.nxID);
    if(this.nxID != 10)
    {
      this.nxID += 1;
      // let Nxparams = new HttpParams().set("id",this.nxID);
      this.productdetailsService.loadNext(this.nxID).subscribe(response=>{
        this.nxProd = response!;
      });
      // this.http.get<ProductModule>('http://localhost:3000/product?id='+this.nxID).subscribe(response=>{
      //   this.nxProd = response!;
      // });
    }
  }

}
