import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  private policy_url="http://localhost:8080/policies";
  private agentUrl="http://localhost:8080/getAgents";
  private policyHolderUrl="http://localhost:8080/getPolicyHolder";
  myPolicy:any=[];
   agents:any=[];
   policyHolders:any=[];
 
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

    getAgents()
    {
        this.http.get(this.agentUrl).
        subscribe(
          response=>this.agents=response,
          error=>console.log(error)
        );
    }

    getPolicyHolders()
    {
      this.http.get(this.policyHolderUrl).
      subscribe(response=>this.policyHolders=response,
        error=>console.log(error)
        );
    }
}
