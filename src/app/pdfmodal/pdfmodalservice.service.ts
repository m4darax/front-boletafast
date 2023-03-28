import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfmodalService {

  public urlPdfS3: string;
  public modal: boolean = false;

  constructor() { }

  openModal(_urlPdfS3: string): boolean {
    console.log("probando " + _urlPdfS3)
    this.urlPdfS3 = _urlPdfS3 + "#toolbar=0";
    console.log("probando " + this.urlPdfS3)
    return this.modal = true;
  }

  closeModal(): boolean {
   return this.modal = false;
  }
}
