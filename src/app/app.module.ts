import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from './template/home/home.component';
import { TestService } from './Services/test.service';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderComponent } from './order/order.component';
import { ProductServiceService } from './Services/product-service.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductdetailsService } from './Services/productdetails.service';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DataService } from './Services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    OrderComponent,
    ProductDetailsComponent,
    LoginComponent,
    AddProductComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    ProductServiceService,
    ProductdetailsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
