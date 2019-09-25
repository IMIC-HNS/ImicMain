import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterPolicyholder} from './register-policyholder';
import {CommonService} from 'src/app/Core/common.service';
import {ApiService} from '../../../Core/api.service';
import {PolicyholderregistrationService} from './policyholderregistration.service';

@Component({
  selector: 'app-register-policyholder',
  templateUrl: './register-policyholder.component.html',
  styleUrls: ['./register-policyholder.component.css']
})
export class RegisterPolicyholderComponent implements OnInit {

  registerForm1: FormGroup;
  submitted = false;
  loggedInUser: any = {};
  isAgent = false;
  isEncoded = false;
  id = '';
  requestedUserId = '';
  policyHolder: RegisterPolicyholder = new RegisterPolicyholder();


  constructor(private fb: FormBuilder, private routes: Router, private route: ActivatedRoute,
              private policyholderregistrationService: PolicyholderregistrationService, private api: ApiService
    ,         private commonService: CommonService) {
      this.loggedInUser = commonService.loggedInUser;
      console.log('user loggedIn' + JSON.stringify(this.loggedInUser));
      this.isAgent = (this.loggedInUser && this.loggedInUser.type === 'AGENT');
      this.isEncoded = !this.isAgent;
      console.log('user type' + this.isAgent);
      this.id = this.route.snapshot.params.id;
      if (this.isAgent) {
        this.requestedUserId = this.loggedInUser.id;
      }

     }

  ngOnInit() {
    this.initializeForm();

    this.api.get('/user/' + this.id + '/' + this.isEncoded).subscribe(
      (res: RegisterPolicyholder) => {
      this.policyHolder = res,
      console.log(this.policyHolder);
      this.policyHolder.aadharDoc = 'http://docurl';
      if (!this.isAgent) {
        this.requestedUserId = this.policyHolder.id;
      }
      this.registerForm1 = this.fb.group({
        id: [this.policyHolder.id],
        firstName: [this.policyHolder.firstName, Validators.required],
        lastName: [this.policyHolder.lastName, Validators.required],
        email: [this.policyHolder.email, [Validators.required, Validators.email]],
        mobileNumber: [this.policyHolder.mobileNumber, [Validators.required, Validators.minLength(10)]],
        policyNumber: [this.policyHolder.policyNumber, Validators.required],
        city: [this.policyHolder.city, Validators.required],
        aadhar: [this.policyHolder.aadhar],
        dob: [this.policyHolder.dob],
        aadharDoc: [this.policyHolder.aadharDoc],
        nominee: this.fb.group({
        nomine: [this.policyHolder.nominee.nomine],
        relationship: [this.policyHolder.nominee.relationship],
        aadharNumber: [this.policyHolder.nominee.aadharNumber]
        })
    });
    },
    error => console.log(error)
  );
  }

  initializeForm() {
    this.registerForm1 = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      policyNumber: ['', Validators.required],
      city: ['', Validators.required],
      aadhar: [''],
      dob: [''],
      aadharDoc: [''],
      nominee: this.fb.group({
      nomine: ['', Validators.required],
      relationship: ['', Validators.required],
      aadharNumber: ['', Validators.required]
      })
  });
  }

  get f() { return this.registerForm1.controls; }

  onSubmit() {
    console.log('this', this.registerForm1);
    this.submitted = true;
    if (this.registerForm1.invalid) {
    alert('policyholder submit');
    console.log(this.registerForm1.value);
    return;
    }
    this.policyholderregistrationService.postData(this.registerForm1.value, this.requestedUserId)
  .subscribe(
    (data => console.log('data posted' + data)),
    (error => console.log(error))
  );

  }
  }



