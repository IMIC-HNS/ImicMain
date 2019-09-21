import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ApiService } from './Core/api.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private api: ApiService, private common: CommonService) { }

 login(user){
  return this.api.login(user)
  .subscribe(
   res =>{
     console.log(res);
     this.common.loggedInUser = res;
   },
  )
   }

}
