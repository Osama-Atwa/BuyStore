import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  login:boolean = true;
  lastComponent!:Component;
  show_logout = false;
  routes = [
    {linkName:'Home', url:'home'},
    {linkName:'Products', url:'products'},
    {linkName:'Orders', url:'orders'},
    {linkName:'login', url:'login'},
    {linkedName:'logout',url:'logout'}
  ];
  Logout(e:boolean){
    this.show_logout = e;
  }
  Login(e:any)
  {
    // if(e.constructor.name === "OrderComponent" && this.lastComponent === "LoginComponent")
    // {
    //   this.show_logout = true;
    // }
    if(this.lastComponent)
    {
      console.log(this.lastComponent.constructor.name);
      if(this.lastComponent.constructor.name == "LoginComponent")
      {
        this.show_logout = true;
      }
      console.log(this.show_logout);
    }

    this.lastComponent = e;

  }

}
