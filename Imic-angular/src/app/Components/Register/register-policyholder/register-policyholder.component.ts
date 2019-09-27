import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterPolicyholder} from './register-policyholder';
import {CommonService} from 'src/app/Core/common.service';
import {ApiService} from '../../../Core/api.service';
import {PolicyholderregistrationService} from './policyholderregistration.service';
import {HttpResponse} from '@angular/common/http';

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
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private fb: FormBuilder, private routes: Router, private route: ActivatedRoute,
              private policyholderregistrationService: PolicyholderregistrationService, private api: ApiService
    ,         public commonService: CommonService
    ,         private router: Router) {
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
    this.getPolicyHolderData();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.policyholderregistrationService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!' + JSON.stringify(event));
        this.policyHolder.aadharDoc = event.body;
      }
    });

    this.selectedFiles = undefined;
  }

  getPolicyHolderData() {
    this.api.get('/user/' + this.id + '/' + this.isEncoded).subscribe(
      (res: RegisterPolicyholder) => {
        this.policyHolder = res,
          console.log(this.policyHolder);
        // this.policyHolder.aadharDoc = 'http://docurl';
        if (!this.isAgent) {
          this.requestedUserId = this.policyHolder.id;
        }
        this.initializeForm(res);
        console.log(this.initializeForm);
      },
      error => {
        this.policyHolder = new RegisterPolicyholder();
        this.initializeForm(this.policyHolder);
        console.log(error);
      }
    );
  }

  initializeForm(policyHolder: RegisterPolicyholder) {
    this.registerForm1 = this.fb.group({
      id: [policyHolder.id],
      firstName: [policyHolder.firstName, Validators.required],
      lastName: [policyHolder.lastName, Validators.required],
      email: [policyHolder.email, [Validators.required, Validators.email]],
      mobileNumber: [policyHolder.mobileNumber, [Validators.required, Validators.minLength(10)]],
      policyNumber: [policyHolder.policyNumber, Validators.required],
      city: [policyHolder.city, Validators.required],
      aadhar: [policyHolder.aadhar],
      dob: [policyHolder.dob],
      aadharDoc: [policyHolder.aadharDoc],
      nominee: this.fb.group({
        nomine: [''],
        relationship: [''],
        aadharNumber: ['']
      }),
    });
  }

  get f() {
    return this.registerForm1.controls;
  }

  onSubmit() {
    console.log('this', this.registerForm1);
    this.submitted = true;
    if (this.registerForm1.invalid) {
      alert('policyholder submit');
      console.log(this.registerForm1.value);
      return;
    }
    this.registerForm1.value.aadharDoc = this.policyHolder.aadharDoc;
    this.policyholderregistrationService.postData(this.registerForm1.value, this.requestedUserId)
      .subscribe(
        (data => console.log('data posted' + data)),
        (error => console.log(error))
      );
    alert('POLICYHOLDER FORM HAS BEEN INITIALIZED');
    this.router.navigate(['/home']);

  }
}



