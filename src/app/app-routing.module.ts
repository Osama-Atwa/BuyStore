import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './template/home/home.component';
import { AuthService } from './Services/Auth.service';
import { GuardGuard } from './_guard/-guard.guard';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Route[] = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'orders', component:OrderComponent, canActivate:[GuardGuard]},
  {path:'products/:id',component:ProductDetailsComponent,pathMatch:'full'},
  {path:'orders/:id',component:ProductDetailsComponent, pathMatch:'full'},
  {path:'products',component:ProductListComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',redirectTo:'/home'},
  {path:'AddProduct',component:AddProductComponent},
  {path:'AddProduct/:id',component:AddProductComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
