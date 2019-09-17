import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ContactUs } from './contactus';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private url="http://localhost:8080/contactus/";
  private contactus_url="http://localhost:8080/contactus/";

  constructor(private httpClient: HttpClient) { }

  // postData(register:NgForm)
  // {  console.log(register);
  //    return this._http.post<any>(this.url,register);
  // }

  public createPolicyHolder(contactus)
  {
    console.log("P.H. details");
    return this.httpClient.post<ContactUs>("http://localhost:8080/contactus/",contactus);
  }


  
//  login(user){
//   return this._http.post<any>(this.login_url,user)
//   .subscribe(
//    res =>{
//      console.log(res);
//    }
//   )
   }
  
