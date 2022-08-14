import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './template/home/home.component';

const routes: Route[] = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'orders', component:OrderComponent},
  {
    path:'products/:id',
    component:ProductDetailsComponent,
    pathMatch:'full'
  },
  {path:'orders/:id',component:ProductDetailsComponent, pathMatch:'full'},
  {path:'products',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
