import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<any>();
  ID = this.subject.asObservable();
  sendData(ID: number) {
      this.subject.next(ID);
  }

  clearData() {
      this.subject.next(__values);
  }

  getData(): Observable<any> {
      return this.subject.asObservable();
  }
}
