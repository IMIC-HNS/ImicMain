import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Core/api.service';
import { CommonService } from 'src/app/Core/common.service';

/**
 *Component class for PolicyHolders
 * @export
 * @class PolicyHoldersComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-policy-holders',
  templateUrl: './policy-holders.component.html',
  styleUrls: ['./policy-holders.component.css']
})
export class PolicyHoldersComponent implements OnInit {

  /**
   *Creates an instance of PolicyHoldersComponent.(constructor)
   * @param {ApiService} api for get the details of user type policyholder on agent dashboard
   * @param {CommonService} commonService for policy detailing
   * @memberof PolicyHoldersComponent
   */
  constructor(private api:ApiService,private commonService:CommonService) { }
   myPolicyHolders:any=[]
    
  ngOnInit() {  
  this.api.get("/dashboard/"+this.commonService.loggedInUser.city+"?type=POLICYHOLDER").subscribe(
    response=>{
      this.myPolicyHolders=response;
      console.log(this.myPolicyHolders)
    },
    error=>console.log(error)
  )
}
display(holder){
  holder.myValue=true;
}    
}
