import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup  } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PolicyholderregistrationService {
  private url="http://localhost:8080/policyholder/5d84c1f7cb7fa1e537586e6c";

  constructor(private _http: HttpClient) {
   }

   postData(register:FormGroup)
 {  console.log(register);
    return this._http.post<any>(this.url,register);
 }

}
