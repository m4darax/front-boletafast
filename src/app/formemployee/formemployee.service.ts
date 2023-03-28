import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormemployeeService {

  modal: boolean = false;

  constructor() { }

  openModal(): boolean {
    return  this.modal = true;
  }

  //private _notifyCreateEmployee = new EventEmitter<any>();

  //get notifyCreateEmployee(): EventEmitter<any> {
    //return this._notifyCreateEmployee;
  //}

  closeModal(): boolean {
   return this.modal = false;
  }
}
