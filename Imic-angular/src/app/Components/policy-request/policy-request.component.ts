import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Core/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/Core/common.service';
import { RegisterPolicyholder } from '../Register/register-policyholder/register-policyholder';

/**
 *
 *Component class for Requesting policy
 * @export
 * @class PolicyRequestComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-policy-request',
  templateUrl: './policy-request.component.html',
  styleUrls: ['./policy-request.component.css']
})
export class PolicyRequestComponent implements OnInit {

  /**
   *
   * @type {string} id Used for storing the id of policy
   * @memberof PolicyRequestComponent
   */
  id: string;

  /**
   *This field saves the data of desired policy selected by the new policyholder.
   *
   * @type {{}} userPolicydetails
   * @memberof PolicyRequestComponent
   */
  userPolicydetail: {};
  showPolicyUser = false;

  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router,private commonService:CommonService) { }
  url="/dashboard/getByStatus?status=REQUESTED";
  
  policyHolder:any=[];
  updatedUser={};
  

  
  /**
   *
   *Method showAlert will generate an alert as soon as a policy is selected
   * @param {*} holder
   * @memberof PolicyRequestComponent
   */

   /**
    * This method will be called to show details of selecteds policy holder.
    * @param {RegisterPolicyholder} holder Policy holder object.
    */
  showAlert (holder : Object){
      this.userPolicydetail = holder;
      this.showPolicyUser = true;
  };


  /**
   * Will be called on initialization of component to get required details.
   */
  ngOnInit() {
  
    this.api.get(this.url).subscribe(
      response=>
      {
        this.policyHolder=response;
        console.log(this.policyHolder);
      }  ,
      error=>console.log(error)
    );
   
  }

}
