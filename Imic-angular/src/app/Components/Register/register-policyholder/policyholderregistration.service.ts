import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { FormGroup  } from "@angular/forms";
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Core/api.service';
import { environment } from 'src/environments/environment';

/**
 * Service class PolicyholderregistrationService for connecting api service
 * @export
 * @class PolicyholderregistrationService
 */
@Injectable({
  providedIn: 'root'
})
export class PolicyholderregistrationService {
  private url="/policyholder/";

  /**
   *Creates an instance of PolicyholderregistrationService.(Constructor)
   * @param {HttpClient} _http  
   * @param {ApiService} api  for posting the policyholderregistration data
   * @memberof PolicyholderregistrationService
   */
  constructor(private _http: HttpClient,private api:ApiService) {}


   /**
    *Creates a method for posting the uploaded files to our storage 
    * @param {File} file file field for holding the aadhar document of policyholder 
    * @returns {Observable<HttpEvent<{}>>}
    * @memberof PolicyholderregistrationService
    */
   pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);

 
 
    const req = new HttpRequest('POST', 'http://localhost:8080/api/policyholder/uploadingfile', formdata, {

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
