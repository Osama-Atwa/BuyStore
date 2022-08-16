import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {AuthService} from 'src/app/login/Auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() routes:any[]=[];
  @Input() show_logout:boolean = false;
  @Output() LogEmmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  S_login:boolean = this.authService.Slogin();
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.show_logout = false;
    this.LogEmmitter.emit(this.show_logout);
  }

}
