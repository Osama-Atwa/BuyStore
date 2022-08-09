import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  printToConsole(arg:any){
    console.log(arg);
  }
}
