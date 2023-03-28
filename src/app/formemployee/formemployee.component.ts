import { Component } from '@angular/core';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../employees/employee.service';
import { FormemployeeService } from './formemployee.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PdfmodalService } from '../pdfmodal/pdfmodalservice.service';

@Component({
  selector: 'app-formemployee',
  templateUrl: './formemployee.component.html',
  styleUrls: ['./formemployee.component.css']
})
export class FormemployeeComponent {

  public employee: Employee = new Employee();

  constructor( public modalService: FormemployeeService, private employeeService: EmployeeService,
    private router: Router) {}

  closeModal(): void {
    this.modalService.closeModal();
  }

  createEmploye( employee: Employee): void {
    this.employeeService.createEmployee(employee).subscribe(
      {
        next: json => {
          this.router.navigate(['/employee'])
          this.closeModal()
          Swal.fire('Exito', 'Usuario creado', 'success')
        },
        error: e => {
          Swal.fire('Error', 'Error', 'error')
        }
      }
    );
  }
}
