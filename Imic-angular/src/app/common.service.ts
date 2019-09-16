import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  private policy_url="http://localhost:8080/policies";
  public myPolicy:any=[];
  getPolicies()
  {
    this.myPolicy=this.http.get(this.policy_url);
    console.log(this.myPolicy);
    
  }

}
