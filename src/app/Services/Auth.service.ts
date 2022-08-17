import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public S_login:boolean = true;
  constructor(private router: Router) { }

  Login<bool>(email:string,password:string)
  {
    localStorage.setItem('currentUser',email);
    localStorage.setItem('password',password);
    localStorage.setItem('token',"fakeToken");
    this.S_login = false;
    return this.S_login;
  }
  logout(){
    localStorage.removeItem('token');
    this.S_login = true;
  }

  Slogin(){
    return this.S_login;
  }

}
