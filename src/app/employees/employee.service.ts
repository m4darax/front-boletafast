import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { Shippingrecord } from './shippingrecord';
import { Recordshippingemployee } from './recordshippingemployee';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlRaiz: string = 'http://localhost:9000/'
  private urlEndPint: string = this.urlRaiz+'api/sendboleta' //get employess
  private urlEndPointDetailsShippingEmployee = this.urlRaiz+'api/detailsemployee'
  private urlSendShippingUploadS3 = this.urlRaiz+"api/sendShippingUploadS3"
  private urlEndPointCreateEmployee = this.urlRaiz+'api/createemployee';
  private urlEndPointUploadExcelS3 = this.urlRaiz+"api/fileexcel";
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient) { }

  getEmployess(): Observable<Employee[]> {
    //return of(Employee)  ;

    return this.http.get<Employee[]>(this.urlEndPint).pipe (
      map( response => response as Employee[])
    );
  }

  getDetailsEmploye(employee: Employee): Observable<Shippingrecord[]> {
    return this.http.post<Shippingrecord[]>(this.urlEndPointDetailsShippingEmployee, employee, {headers: this.httpHeaders} )
    .pipe( //otra forma en vez de poner <Shippingrecord[]>
      map( sh => {
        return sh as Shippingrecord[]
      })
    );
  }

  createEmployee(employee: Employee): Observable<any> {
  return this.http.post<any>(this.urlEndPointCreateEmployee, employee, {headers: this.httpHeaders}).pipe(
      catchError( (e) => {  //aqui ingresa solo si sale error 
        if ( e.status != 201 ) {
          console.log(e)
          Swal.fire('ERROR', 'Servicio no disponible', 'error')
          return throwError(() => e);
        }
        return throwError(() => e);
      })
    );
  }

  uploadImage(file: File, dni: string): Observable<any> {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("dni", dni);
    return this.http.post(`${this.urlEndPointUploadExcelS3}`, formData);/*.pipe(
      map((response: any) => {
        return response.content.rows;
      }),
      catchError ( e => {
        console.log(e);
        return e;
      })
    );*/
  }

  employeeListSend(recordshippingemployee: Recordshippingemployee): void {

    this.http.post<any>(this.urlSendShippingUploadS3, recordshippingemployee, { headers: this.httpHeaders}).subscribe();
  }

  downloadPdfBoleta(urlPdfS3: string): void {
    fetch(urlPdfS3)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'example.pdf';
      document.body.appendChild(a);
      a.click();        
      a.remove();
    });
  }

}
