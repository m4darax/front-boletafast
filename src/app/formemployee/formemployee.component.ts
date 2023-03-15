import { Component } from '@angular/core';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../employees/employee.service';
import { FormemployeeService } from './formemployee.service';

@Component({
  selector: 'app-formemployee',
  templateUrl: './formemployee.component.html',
  styleUrls: ['./formemployee.component.css']
})
export class FormemployeeComponent {

  public employee: Employee = new Employee();

  constructor( public modalService: FormemployeeService, private employeeService: EmployeeService) {}

  closeModal(): void {
    this.modalService.closeModal();
  }

  createEmploye( employee: Employee): void {
    this.employeeService.createEmployee(employee);
  }
}
