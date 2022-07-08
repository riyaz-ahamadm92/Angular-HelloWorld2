import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";



@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  getProduct(){
    return this.http.get<Product>(`${this.apiServerUrl}`)
    .pipe(map((res : any)=>{
      return res;
    },{ 'headers': this.headers }))
  }


  public getEmployees(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}`);
  }

  public addEmployee(employee: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}`, employee);
  }

  public updateEmployee(employee: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiServerUrl}/update/`,employee);
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }
}
