import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  private policy_url="http://localhost:8080/policies";
   myPolicy:any=[];
  getPolicies()
  {
    return new Promise( (resolve, reject) => {
    this.http.get(this.policy_url). 
    subscribe(
      response=>{
        this.myPolicy=response;
        console.log(this.myPolicy);
        resolve("done");
      },
      error=> {
        console.log(error);
        reject(error);
      }
    )
    });
    // console.log(this.myPolicy);
    
  }

}
