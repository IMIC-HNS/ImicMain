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


  private url="http://localhost:8080/login/";
  private login_url="http://localhost:8080/login/";
   users={
    "ADMIN":"admin-dashboard",
    "AGENT":"agent-dashboard",
    "POLICYHOLDER":"policyholder-dashboard"
  }; 
  dashBoard="";
  constructor(private _http: HttpClient,private router:Router,private route:ActivatedRoute, private commonService: CommonService) { }

  postData(register:FormGroup)
  {  console.log(register);
     return this._http.post<any>(this.url,register);
  }


  
 login(user){
   return this._http.post<any>(this.login_url,user)
  .subscribe(
   res =>{
     console.log(res);
     if(res===null)
      alert("Invalid Username or Password");
   
      else { 
     this.dashBoard=this.users[res.type];
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
