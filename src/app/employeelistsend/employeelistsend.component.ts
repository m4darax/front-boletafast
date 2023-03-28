import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { EmployeeService } from '../employees/employee.service';
import { Recordshippingemployee } from '../employees/recordshippingemployee';

@Component({
  selector: 'app-employeelistsend',
  templateUrl: './employeelistsend.component.html',
  styleUrls: ['./employeelistsend.component.css']
})
export class EmployeelistsendComponent {

  private imageSelect: File

  public jsonData: any[] = [];
  public recordShippingEmployee: Recordshippingemployee = new Recordshippingemployee();

  public fileUploadView: boolean = true;

  constructor( private employeeService: EmployeeService) { }

  ngOnInit() {

  }
  

  selectImage(event) {

    this.imageSelect = event.target.files?.[0]

    if (this.imageSelect != null && this.imageSelect != undefined) {
      this.fileUploadView = false;
    }

  }

  uploadExcel() {
    this.employeeService.uploadImage(this.imageSelect, "76697566").subscribe( json => {

      this.jsonData = json.content.rows
      this.recordShippingEmployee = json.record as Recordshippingemployee

    });
  }

  employeeListSend(): void {

    this.employeeService.employeeListSend(this.recordShippingEmployee);

  }
}
