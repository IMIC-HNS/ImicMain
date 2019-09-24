import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup  } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PolicyholderregistrationService {
  private url="http://localhost:8080/policyholder/";

  constructor(private _http: HttpClient) {
   }

   postData(register:FormGroup, id: string)
 {  console.log(register);
    return this._http.post<any>(this.url + id,register);
 }

}
