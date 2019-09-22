import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
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
  constructor(private _http: HttpClient,private router:Router,private route:ActivatedRoute) { }

  postData(register:FormGroup)
  {  console.log(register);
     return this._http.post<any>(this.url,register);
  }


  
 login(user){
   return this._http.post<any>(this.login_url,user)
  .subscribe(
   res =>{
     console.log(res);
     this.dashBoard=this.users[res.type];
     console.log(this.dashBoard);
    this.router.navigate([this.dashBoard],{relativeTo:this.route});
    }
  )
  
   }

}
