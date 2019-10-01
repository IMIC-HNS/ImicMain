import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { ApiService } from '../../Core/api.service';
import { CommonService } from '../../Core/common.service';

/**
 *
 *Component class loginserviceService for connecting user login 
 * @export
 * @class LoginServiceService
 */
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  private url="/login/";

   /**
    *Create an instance users for displaying the respective dashboard to the respective users.
    *
    * @memberof LoginServiceService
    */
   users={
    "ADMIN":"admin-dashboard",
    "AGENT":"agent-dashboard",
    "POLICYHOLDER":"policyholder-dashboard"
  };

  dashBoard="";

  /**
   *Creates an instance of LoginServiceService. (Constructor)
   * @param {ApiService} api for calling the common api service
   * @param {Router} router for routing purpose
   * @param {ActivatedRoute} route  for specific routing
   * @param {CommonService} commonService for getting the details of static policies
   * @memberof LoginServiceService
   */
  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute, private commonService: CommonService) { }

  /**
   *
   *method postData for url check
   * @param {FormGroup} register
   * @returns
   * @memberof LoginServiceService
   */
  postData(register:FormGroup){  console.log(register);
     return this.api.post(this.url,register);
  }

 /**
  *
  *method login for checking the user login as well as work on session storage of users's email and password
  * @param {*} user
  * @returns
  * @memberof LoginServiceService
  */
 login(user){
   return this.api.login(user)
  .subscribe(
   res =>{
     console.log(res);
     if(res==null)
      alert("Invalid Username or Password");
      else {
     this.dashBoard=this.users[res["type"]];
     this.commonService.loggedInUser = res;
     console.log(this.dashBoard);
     sessionStorage.activeUser=user.email;
     sessionStorage.activePassword=user.password;
    this.router.navigate([this.dashBoard],{relativeTo:this.route});
          }
      }
   )
  
   }

   logout(){
     console.log("loggedOut");
     sessionStorage.clear();
   }
}
