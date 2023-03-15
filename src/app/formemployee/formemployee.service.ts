import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormemployeeService {

  modal: boolean = false;

  constructor() { }

  openModal(): boolean {
    return  this.modal = true;
  }

  closeModal(): boolean {
   return this.modal = false;
  }
}
