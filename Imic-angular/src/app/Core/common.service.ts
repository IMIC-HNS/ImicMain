import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private api: ApiService) {
  }

  private policyUrl = '/policies';
  myPolicy: any = [];
  policyHoldersForAgent: any = [];
  loggedInUser: any = {};
  private agentUrl = '/getAgents';
  private policyHolderUrl = '/getPolicyHolder';
  agents: any = [];
  policyHolders: any = [];
  policyId: string;

  getPolicies() {
    return new Promise((resolve, reject) => {
      this.api.get(this.policyUrl).subscribe(
        response => {
          this.myPolicy = response;
          console.log(this.myPolicy);
          resolve('done');
        },
        error => {
          console.log(error);

        }
      );
    });
  }

  getAgents() {
    this.api.get(this.agentUrl).subscribe(
      response => this.agents = response,
      error => console.log(error)
    );
  }

  getPolicyHolders() {
    this.api.get(this.policyHolderUrl).subscribe(response => this.policyHolders = response,
      error => console.log(error)
    );
  }

}
