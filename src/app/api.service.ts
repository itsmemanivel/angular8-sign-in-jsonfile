import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URI = "http://localhost:3000/api/data";

  
  constructor( private http: HttpClient) { 
  }
  

  registerData(email, password){

    const body = {

      email: email,
      password: password
    };

     return  this.http.post<any>(this.URI, body);

  }
  
}
