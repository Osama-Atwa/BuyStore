import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  routes = [
    {linkName:'Home', url:'home'},
    {linkName:'Products', url:'products'},
    {linkName:'Orders', url:'orders'}
  ]
}
