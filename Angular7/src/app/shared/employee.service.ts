import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly  rootURL= "http://localhost:55607/";
  
  constructor(private http : HttpClient) { }

  postEmployee(formData: Employee)
  {
   return this.http.post(this.rootURL+ 'api/Employees', formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'api/Employees')
    .toPromise().then(res => this.list = res as Employee[]);
  }

  putEmployee(formData : Employee){
    return this.http.put(this.rootURL+'api/Employees/'+formData.Id,formData);
     
   }

   deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'api/Employees/'+id);
   }

   
}
