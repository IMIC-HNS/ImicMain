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

  public createPolicyHolder(contactus)
  {
    console.log("Policy. Holder. details.");
    return this.httpClient.post<ContactUs>("http://localhost:8080/contactus/",contactus);
  }

   }
  
