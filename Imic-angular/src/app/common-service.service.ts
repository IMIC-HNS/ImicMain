import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }
  private policy_url="http://localhost:8080/policies";

  getPolicies()
  {
    return this.http.get(this.policy_url);
  }

}
