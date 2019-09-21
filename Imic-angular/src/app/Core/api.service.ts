import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Components/login/Login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {
   }

   get (url: string) {
     return this.http.get(environment.baseURL + url);
   }

   post (url: string, data: any) {
    return this.http.post(environment.baseURL + url, data);
  }

  login(user: Login) {
    return this.http.post(environment.baseURL + '/login', user);
  }
}
