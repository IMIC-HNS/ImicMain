import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PolicyholderdetailsService {
  private url="http://localhost:8080/policyholder/";

  constructor(private _http: HttpClient) {
   }

   postData(claim:FormGroup, id: string)
 {  console.log(claim);
    return this._http.post<any>(this.url + id,claim);
 }
}
