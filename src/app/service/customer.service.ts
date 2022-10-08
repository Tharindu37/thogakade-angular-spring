import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../dto/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public createUser(name:string,address:string,salary:number):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/customer',{
      name,
      address,
      salary
    })
  }

  public getAllCustomers():Observable<Customer>{
    return this.http.get<Customer>('http://localhost:8080/api/v1/customer/all');
  }

  public deleteCustomer(id:number):Observable<any>{
    return this.http.delete('http://localhost:8080/api/v1/customer/'+id);
  }

  public updateUser(id:number,name:string,address:string,salary:number){
    return this.http.put('http://localhost:8080/api/v1/customer',{
      id,
      name,
      address,
      salary
    })
  }

  public findCustomer(id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/api/v1/customer/${id}`);
  }

}
