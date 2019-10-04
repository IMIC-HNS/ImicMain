import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../Components/login/Login';

import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';

/**
 *Service Class for common api having get , post, login methods
 * @export
 * @class ApiService
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

   /**
    * common get method for generating the url for respective get mapping
    * @param {string} url 
    * @returns geturl
    * @memberof ApiService
    */
   get (url: string) {
     return this.http.get(environment.baseURL + url);
   }

   /**
    * common post method for generating the url for respective post mapping
    * @param {string} url posturl
    * @param {*} data data that will be posted by the form
    * @returns posturl
    * @memberof ApiService
    */
   post (url: string, data: any) {
    return this.http.post(environment.baseURL + url, data);
  }

  /**
   * common login method for generating the url for respective user login
   * @param {Login} user consist of that user who is trying to login
   * @returns loginpost url
   * @memberof ApiService
   */
  login(user: Login) {
    return this.http.post(environment.baseURL + '/login/', user);
  }

  download(url:string)  {
    
    // headers = headers.append('Accept', 'undefined;charset=utf-8');
    return this.http.get(environment.baseURL + url, { responseType: 'arraybuffer' });
  }

}

