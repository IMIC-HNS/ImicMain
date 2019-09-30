import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Core/api.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyholderdetailsService {
  private url="/policyholder/";

  constructor(private _http: HttpClient,private api:ApiService) {
   }

   postData(claim:FormGroup, id: string)
 {  console.log(claim);
    return this._http.post<any>(this.url + id,claim);
 }
}
