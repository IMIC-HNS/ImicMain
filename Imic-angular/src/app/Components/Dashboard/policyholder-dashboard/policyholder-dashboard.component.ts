import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Policyholderdetails} from './policyholderdetails';
import {CommonService} from 'src/app/Core/common.service';
import {HttpClient} from '@angular/common/http';
import {RegisterPolicyholder} from '../../Register/register-policyholder/register-policyholder';
import {LoginServiceService} from '../../login/login-service.service';
import { ApiService } from 'src/app/Core/api.service';

/**
 *Component class for PolicyholderDashboard
 * @export
 * @class PolicyholderDashboardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-policyholder-dashboard',
  templateUrl: './policyholder-dashboard.component.html',
  styleUrls: ['./policyholder-dashboard.component.css']
})
export class PolicyholderDashboardComponent implements OnInit {
  url = '/user/';
  /**
   *
   * @type {FormGroup} registerForm2 for store the data
   * @memberof PolicyholderDashboardComponent
   */
  registerForm2: FormGroup;

  /**
   *
   * @type {*} loggedInUser specifying the user who is currently loggedin
   * @memberof PolicyholderDashboardComponent
   */
  loggedInUser: any = {};
  isEncoded = false;
  id: string;

  /**
   *
   * @type {RegisterPolicyholder} userPolicydetail show the details that was submitted by registerpolicyholder form
   * @memberof PolicyholderDashboardComponent
   */
  userPolicydetail: RegisterPolicyholder = new RegisterPolicyholder();

  /**
   *Creates an instance of PolicyholderDashboardComponent.(constructor)
   * @param {ApiService} api instance of api service used for get mapping
   * @param {FormBuilder} fb instance of FormBuilder
   * @param {CommonService} commonService for policy detailing
   * @param {LoginServiceService} logout for logging out policyholder dashboard
   * @memberof PolicyholderDashboardComponent
   */
  constructor(private api:ApiService,private fb: FormBuilder, private commonService: CommonService, public logout: LoginServiceService) {
    this.loggedInUser = commonService.loggedInUser;
    console.log('user loggedIn' + JSON.stringify(this.loggedInUser));
  }

  ngOnInit() {

    this.api.get(this.url + this.loggedInUser.id + '/' + this.isEncoded).subscribe(
      (res: RegisterPolicyholder) => {
        this.userPolicydetail = res;
        console.log(res);
      },
      error => console.error()
    );
  }

  claim() {
    console.log('claimed');
  }
}
