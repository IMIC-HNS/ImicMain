import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/Core/api.service';
import {Router, ActivatedRoute} from '@angular/router';
import {CommonService} from '../../../Core/common.service';
import {LoginServiceService} from '../../login/login-service.service';

/**
 *Component class for AdminDashboard
 * @export
 * @class AdminDashboardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  url = '/dashboard/getByStatus?status=SUBMITTED';
  decisionUrl = '/dashboard/decision/';
  agents: Object = [];
  policyHolders: Object = [];
  id: string;
  updatedUser = {};
  userPolicydetail: any;
  showPolicyUser: boolean;

  /**
   *Creates an instance of AdminDashboardComponent.(constructor)
   * @param {CommonService} commonService for policy detailing
   * @param {ApiService} api for get the application url and also for getting the agent details and for post teh status of policy as accepted or rejected
   * @param {Router} router for routing purpose
   * @param {ActivatedRoute} route
   * @param {LoginServiceService} loginService for login to the admin dashboard
   * @memberof AdminDashboardComponent
   */
  constructor(private commonService: CommonService, private api: ApiService, private router: Router, private route: ActivatedRoute, private loginService: LoginServiceService) {
  }

  ngOnInit() {
    this.api.get(this.url).subscribe(
      response => {
        this.policyHolders = response;
        console.log(this.policyHolders);
      },
      error => console.log(error)
    );
    console.log(sessionStorage.activeUser);
    console.log(sessionStorage.activePassword);
    this.api.get('/dashboard/getAgents').subscribe(
      response => {
        this.agents = response;
        console.log(this.agents);
      },
      error => console.log(error)
    );
    console.log(this.agents);

  }

  /**
   *method approval for approving the policy request
   * @param {*} id policyid
   * @memberof AdminDashboardComponent
   */
  approval(id) {
    console.log(id);
    this.api.post(this.decisionUrl + id + '?status=ACCEPTED', {}).subscribe(
      response => {
        this.updatedUser = response;
        console.log(this.updatedUser);
        alert('Approval Successful');
        this.router.navigate([this.route]);
      },
      error => console.log(error)
    );
  }

  /**
   *method rejection for rejecting the policy request
   * @param {*} id consist of policy id
   * @memberof AdminDashboardComponent
   */
  rejection(id) {
    this.api.post(this.decisionUrl + id + '?status=REJECTED', {}).subscribe(
      response => {
        this.updatedUser = response;
        console.log(this.updatedUser);
        alert('Rejection Successful');

      },
      error => console.log(error)
    );
  }

  showAlert (holder){
    this.userPolicydetail = holder;
    this.showPolicyUser = true;
  };

  logout() {
    this.loginService.logout();
  }

}
