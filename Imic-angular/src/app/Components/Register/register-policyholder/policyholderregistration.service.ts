import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { FormGroup  } from "@angular/forms";
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Core/api.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PolicyholderregistrationService {
  private url="/policyholder/";

  constructor(private _http: HttpClient,private api:ApiService) {}

   pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', environment.baseURL +'/policyholder/uploadingfile', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this._http.request(req);
  }
 
   postData(register:FormGroup, id: string)
 {  console.log(register);
    return this.api.post(this.url + id,register);
 }

}
