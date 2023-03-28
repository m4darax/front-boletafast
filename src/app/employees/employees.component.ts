import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Shippingrecord } from './shippingrecord';
import { Router } from '@angular/router';
import { FormemployeeService } from '../formemployee/formemployee.service';
import { PdfmodalService } from '../pdfmodal/pdfmodalservice.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public shippingR : Shippingrecord;
  public shippingRecordsEmisor: Shippingrecord[];
  public employees: Employee[];

  constructor ( private employeeService: EmployeeService,
    private router: Router,
    private modalService: FormemployeeService,
    public pdfmodalService: PdfmodalService) {}

  
  openModalPdf(urlPdfS3: string) {
    this.pdfmodalService.openModal(urlPdfS3)
  }
  
  ngOnInit(): void {
   this.employeeService.getEmployess().pipe(
    map ( em => {
      em.forEach( e => {
        let path = e.pathJasperBoleta;
        let pathsplit = path?.split("\\").length;
        e.pathJasperBoleta = path?.split("\\")[pathsplit-1];
      });
      return em;
    } )
   ).subscribe( employees => this.employees = employees);

  }


  redirectToExternalLink(employee: Employee): void {
    window.location.href = employee.pathFileFullBoletaS3Public ;
  }


  //Este metodo manda una lista de shippingRecord al componente detailemployee y en el state guarda la propiedad shippingRecords
  getShippingRecord(employee: Employee): void {

    this.employeeService.getDetailsEmploye(employee)
    .subscribe( sh => {
      this.shippingRecordsEmisor = sh ;
    this.router.navigate(['/detallesemployee'], { state: { shippingRecords: sh } });
    } )
  }

  downloadPdfS3(urlPdfS3: string) : void {
    let myuuid = uuidv4();

    fetch(urlPdfS3)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = myuuid+'.PDF';
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch(error => console.error(error));
  } 

}
