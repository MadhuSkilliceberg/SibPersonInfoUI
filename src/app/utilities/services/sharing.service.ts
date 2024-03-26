import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  // share: Subject<any> = new Subject();
  // share$: Observable<any> = this.share.asObservable();

  constructor() { }

  // shareDate(data: object) {
  //   this.share.next(data);
  // }

  private sharingObject: any;


  get sharingValue() {
    return this.sharingObject
  }

  set sharingValue(obj) {
    this.sharingObject = obj;
  }
}
