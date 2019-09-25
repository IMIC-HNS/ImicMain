import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  constructor(private api: ApiService) { }
  private policy_url="/policies";
   myPolicy:any=[];
   policyHoldersForAgent:any=[];
   loggedInUser : any = {};
  getPolicies()

  {
    return new Promise( (resolve, reject) => {
    this.api.get(this.policy_url). 
    subscribe(
      response=>{
        this.myPolicy=response;
        console.log(this.myPolicy);
        resolve("done");
      },
      error=> {
        console.log(error);

      }
    )
    });
  }

}
