import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AgentregistrationServiceService {
 private url="http://localhost:8080/register/agent";
  constructor(private _http: HttpClient) { }
 // this.http.post<any>(this.url,this.registerForm.value);
 //console.log(this.http.post<any>(this.url,this.registerForm.value));
 

 postData(register:FormGroup)
 {  console.log(register);
    return this._http.post<any>(this.url,register);
 }


 
  }

