import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Shippingrecord } from './shippingrecord';
import { Router } from '@angular/router';

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
    private router: Router) {}
  
  ngOnInit(): void {
   this.employeeService.getEmployess().pipe(
    map ( em => {
      em.forEach( e => {
        if ( e == undefined || e == null ){
          let path = e.pathJasperBoleta;
          let pathsplit = path.split("\\").length;
          e.pathJasperBoleta = path.split("\\")[pathsplit-1];
        }
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

}
