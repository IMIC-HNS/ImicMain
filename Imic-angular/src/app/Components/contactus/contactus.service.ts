import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ContactUs } from './contactus';
import { ApiService } from 'src/app/Core/api.service';


/**
 *
 *Service for ContactusForm
 * @export
 * @class ContactusService
 */
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private contactus_url="/contactus/";

  private contactus_url="/contactus/";

  constructor(private httpClient: HttpClient, private api: ApiService) { }

  /**
   *Method for creating policyholder
   * @param {*} contactus 
   * @returns Policy Holder who has requested for policy
   * @memberof ContactusService
   */
  public createPolicyHolder(contactus)
  {
    console.log("Policy. Holder. details.");
    return this.api.post(this.contactus_url,contactus);
  }

   }
  
