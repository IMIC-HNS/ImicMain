import {Component, OnInit} from '@angular/core';
import {CommonService} from 'src/app/Core/common.service';
import {ApiService} from 'src/app/Core/api.service';
import {LoginServiceService} from '../../login/login-service.service';

/**
 *Component class for AgentDashboard
 * @export
 * @class AgentDashboardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {

  /**
   *Creates an instance of AgentDashboardComponent.(constructor)
   * @param {CommonService} commonService for using the policy details
   * @param {ApiService} api for get the details of agent via common get mapping
   * @param {LoginServiceService} logout for logging out of the agent dashboard
   * @memberof AgentDashboardComponent
   */
  constructor(private commonService: CommonService, private api: ApiService, public logout: LoginServiceService) {
  }

  policyHolders: any = [];

  ngOnInit() {
    this.api.get('/dashboard/' + this.commonService.loggedInUser.id + '/policyHolders').subscribe(response => {
        this.policyHolders = response;
        console.log(response);
      }, error => console.log(error)
    );
    console.log(this.policyHolders);
  }
}


