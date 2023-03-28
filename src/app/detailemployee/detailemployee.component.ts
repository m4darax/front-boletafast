import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { EmployeeService } from '../employees/employee.service';
import { Shippingrecord } from '../employees/shippingrecord';
import { FormemployeeService } from '../formemployee/formemployee.service';
import { PdfmodalService } from '../pdfmodal/pdfmodalservice.service';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css']
})
export class DetailemployeeComponent {

  @Input() shippingRecordsReceptor: Shippingrecord[];

 // shippingRecords: Shippingrecord[];

  constructor( private employeeService: EmployeeService,
    private modalService: FormemployeeService) {}

  ngOnInit(): void {
    this.shippingRecordsReceptor = history.state.shippingRecords;
  }

  
  downloadPdf(urlPdfS3: string): void {
    this.employeeService.downloadPdfBoleta(urlPdfS3);
  }
}
