import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfmodalService } from './pdfmodalservice.service';

@Component({
  selector: 'app-pdfmodal',
  templateUrl: './pdfmodal.component.html',
  styleUrls: ['./pdfmodal.component.css']
})
export class PdfmodalComponent {


    public pdf:string = "https://boletafast.s3.amazonaws.com/7eacf92d-39a6-4a29-88b0-a9078acd3bac/76697566/2023/MARZO/76697566-23b66c1a-dd3a-4b07-b330-5b5ef68c18d9.PDF#toolbar=0&embedded=true";
    public safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdf);

    constructor( public pdfmodalService: PdfmodalService, public sanitizer: DomSanitizer) {}

    ngOnInit() {
    }

    closeModal() {
      this.pdfmodalService.closeModal();
    }
}
