import { Component } from '@angular/core';
import { FormemployeeService } from '../formemployee/formemployee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor( public modalService: FormemployeeService ) {}

  openModal(): boolean {

    return this.modalService.openModal();
  }

}
