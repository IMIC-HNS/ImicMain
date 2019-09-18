import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url="http://localhost:8080/login/";
  private login_url="http://localhost:8080/login/";

  constructor(private _http: HttpClient) { }

  postData(register:FormGroup)
  {  console.log(register);
     return this._http.post<any>(this.url,register);
  }


  
 login(user){
  return this._http.post<any>(this.login_url,user)
  .subscribe(
   res =>{
     console.log(res);
   },
  )
   }

}
