import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Shippingrecord } from './shippingrecord';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlRaiz: string = 'http://localhost:9000/'
  private urlEndPint: string = this.urlRaiz+'api/sendboleta' //get employess
  private urlEndPointDetailsShippingEmployee = this.urlRaiz+'api/detailsemployee'
  private urlEndPointCreateEmployee = this.urlRaiz+'api/createemployee';
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

  createEmployee(employee: Employee): void{
    this.http.post<Employee>(this.urlEndPointCreateEmployee, employee, {headers: this.httpHeaders}).subscribe();
  }
}
