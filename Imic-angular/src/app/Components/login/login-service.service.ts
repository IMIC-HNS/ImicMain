import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router'

import { ApiService } from '../../Core/api.service';
import { CommonService } from '../../Core/common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  private url="/login/";
  private login_url="/login/";
   users={
    "ADMIN":"admin-dashboard",
    "AGENT":"agent-dashboard",
    "POLICYHOLDER":"policyholder-dashboard"
  };
  dashBoard="";
  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute, private commonService: CommonService) { }

  postData(register:FormGroup)
  {  console.log(register);
     return this.api.post(this.url,register);
  }


  
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
