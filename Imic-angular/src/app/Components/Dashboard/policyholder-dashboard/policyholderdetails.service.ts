import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Core/api.service';

/**
 *Service class for Policyholderdetails
 * @export
 * @class PolicyholderdetailsService
 */
@Injectable({
  providedIn: 'root'
})
export class PolicyholderdetailsService {
  private url="/policyholder/";


  /**
   *Creates an instance of PolicyholderdetailsService.(constructor)
   * @param {ApiService} api for posting the claim details
   * @memberof PolicyholderdetailsService
   */
  constructor(private api:ApiService) {
   }

   postData(claim:FormGroup, id: string)
 {  console.log(claim);
    return this.api.post(this.url + id,claim);
 }
}
