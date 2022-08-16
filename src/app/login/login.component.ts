import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from './Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private authService: AuthService) { }
@Output() LogE :EventEmitter<boolean>= new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  onLogin(){
    let S_login = this.authService.Login(this.email,this.password);
    this.LogE?.emit(S_login);
  }
}
