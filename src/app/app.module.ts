import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employees/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormemployeeComponent } from './formemployee/formemployee.component'
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/Clientes', pathMatch: 'full'},
  { path: 'detallesemployee', component: DetailemployeeComponent},
  { path: 'employee', component: EmployeesComponent},
  { path: 'formemployee', component: FormemployeeComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    DetailemployeeComponent,
    HeaderComponent,
    EmployeesComponent,
    FormemployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
