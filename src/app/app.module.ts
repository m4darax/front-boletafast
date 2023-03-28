import { LOCALE_ID, NgModule } from '@angular/core';
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
import { EmployeelistsendComponent } from './employeelistsend/employeelistsend.component';
import { BinarioComponent } from './binario/binario.component';
import { PdfmodalComponent } from './pdfmodal/pdfmodal.component';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-PE';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

registerLocaleData(localeES, 'es-PE');

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'detallesemployee', component: DetailemployeeComponent},
  { path: 'employee', component: EmployeesComponent},
  { path: 'formemployee', component: FormemployeeComponent},
  { path: 'employeelistsend', component: EmployeelistsendComponent},
  { path: 'binario', component: BinarioComponent},
  { path: 'pdfmodal', component: PdfmodalComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    DetailemployeeComponent,
    HeaderComponent,
    EmployeesComponent,
    FormemployeeComponent,
    EmployeelistsendComponent,
    BinarioComponent,
    PdfmodalComponent
  ],
  imports: [
    NgxExtendedPdfViewerModule,
    BrowserModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  {provide: LOCALE_ID, useValue: 'es-PE' },EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
