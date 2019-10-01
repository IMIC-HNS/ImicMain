import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

/**
 *Service class for policies detailing
 * @export
 * @class CommonService
 */
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  /**
   *Creates an instance of CommonService.(constructor)
   * @param {ApiService} api for get the policies
   * @memberof CommonService
   */
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

  /**
   *Method getPolicies to display the policies
   * @returns policies
   * @memberof CommonService
   */
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

  /**
   *Method getAgents for fetch the agent details
   * @memberof CommonService
   */
  getAgents() {
    this.api.get(this.agentUrl).subscribe(
      response => this.agents = response,
      error => console.log(error)
    );
  }

  /**
   *Method getPolicyHolders for fetch the policyHolder details
   * @memberof CommonService
   */
  getPolicyHolders() {
    this.api.get(this.policyHolderUrl).subscribe(response => this.policyHolders = response,
      error => console.log(error)
    );
  }

}
