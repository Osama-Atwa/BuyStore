import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModule } from '../Models/product/product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() prod!:ProductModule;
  count:number=0;
  @Output() TotalPrice_product= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  OnBuy(){
    this.TotalPrice_product.emit(this.count * this.prod.Price);
  }
}
