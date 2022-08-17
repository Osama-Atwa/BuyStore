import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModule } from '../Models/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private httpClient:HttpClient) { }

  loadPage(id:number)
  {
    // let params = new HttpParams().set("id",id);
     return this.httpClient.get<ProductModule>('http://localhost:3000/product?id='+id);
  }

  loadPrev(prID:number){
    // let Prparams = new HttpParams().set("id",prID);
    return this.httpClient.get<ProductModule>('http://localhost:3000/product?id='+prID);
  }
  loadNext(nxID:number){
    return this.httpClient.get<ProductModule>('http://localhost:3000/product?id='+nxID);
  }
}
