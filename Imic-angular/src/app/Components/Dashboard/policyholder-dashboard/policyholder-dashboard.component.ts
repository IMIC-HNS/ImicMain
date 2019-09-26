import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Policyholderdetails } from './policyholderdetails';
import { CommonService } from 'src/app/Core/common.service';
import { HttpClient } from '@angular/common/http';
import {RegisterPolicyholder} from '../../Register/register-policyholder/register-policyholder';
import { LoginServiceService } from '../../login/login-service.service';

@Component({
  selector: 'app-policyholder-dashboard',
  templateUrl: './policyholder-dashboard.component.html',
  styleUrls: ['./policyholder-dashboard.component.css']
})
export class PolicyholderDashboardComponent implements OnInit {
  url = 'http://localhost:8080/user/';
  registerForm2: FormGroup;
  loggedInUser: any = {};
  isEncoded = false;
  id: string;

   userPolicydetail: RegisterPolicyholder = new RegisterPolicyholder();

  constructor(private fb: FormBuilder, private commonService: CommonService, private http: HttpClient,private logout:LoginServiceService) {
  this.loggedInUser = commonService.loggedInUser;
  console.log('user loggedIn' + JSON.stringify(this.loggedInUser));
}

  ngOnInit() {

    this.http.get(this.url + this.loggedInUser.id + '/' + this.isEncoded).subscribe(
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
