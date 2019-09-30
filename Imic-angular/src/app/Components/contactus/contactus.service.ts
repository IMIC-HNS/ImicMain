import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ContactUs } from './contactus';
import { ApiService } from 'src/app/Core/api.service';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  //private url="http://localhost:8080/contactus/";
  private contactus_url="/contactus/";

  constructor(private httpClient: HttpClient,private api:ApiService) { }

  public createPolicyHolder(contactus)
  {
    console.log("Policy. Holder. details.");
    return this.api.post(this.contactus_url,contactus);
  }

   }
  
