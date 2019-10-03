import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterPolicyholder} from './register-policyholder';
import {CommonService} from 'src/app/Core/common.service';
import {ApiService} from '../../../Core/api.service';
import {PolicyholderregistrationService} from './policyholderregistration.service';
import {HttpResponse} from '@angular/common/http';

/**
 *Component class for RegisterPolicyholder
 * @export
 * @class RegisterPolicyholderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-register-policyholder',
  templateUrl: './register-policyholder.component.html',
  styleUrls: ['./register-policyholder.component.css']
})
export class RegisterPolicyholderComponent implements OnInit {

  /**
   * @type {FormGroup} registerForm1 name of the RegisterPolicyholder html form formgroup
   * @memberof RegisterPolicyholderComponent
   */
  registerForm1: FormGroup;

  submitted = false;

  /**
   *
   * @type {*} loggedInUser used for holding the value of the user who is currently logged in
   * @memberof RegisterPolicyholderComponent
   */
  loggedInUser: any = {};
  isAgent = false;
  isEncoded = false;
  id = '';
  requestedUserId = '';

  /**
   *Creating an instance policyHolder for register a new policyHolder
   * @type {RegisterPolicyholder}
   * @memberof RegisterPolicyholderComponent
   */
  policyHolder: RegisterPolicyholder = new RegisterPolicyholder();

  /**
   *
   * @type {FileList} selectedFiles event for selecting the file document 
   * @memberof RegisterPolicyholderComponent
   */
  selectedFiles: FileList;

  /**
   *
   * @type {File} currentFileUpload for uploading the already selected file via selectedFiles event
   * @memberof RegisterPolicyholderComponent
   */
  currentFileUpload: File;


  /**
   *Creates an instance of RegisterPolicyholderComponent.(Constructor)
   * @param {FormBuilder} fb instance for FormBuilder
   * @param {Router} routes for routing purpose
   * @param {ActivatedRoute} route
   * @param {PolicyholderregistrationService} policyholderregistrationService
   * @param {ApiService} api for posting the form data
   * @param {CommonService} commonService for policy detailing
   * @param {Router} router
   * @memberof RegisterPolicyholderComponent
   */

 text:string;
 
  

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
      this.text="Initialise";
      this.requestedUserId = this.loggedInUser.id;
    }

  }

  ngOnInit() {
    this.getPolicyHolderData();
  }

  /**
   * 
   * @param {*} event for selecting that one file selected from the system directory
   * @memberof RegisterPolicyholderComponent
   */
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  /**
   * upload method for uploading that one selected file
   * @memberof RegisterPolicyholderComponent
   */
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

  /**
   *method getPolicyHolderData for getting all the details of the form fields
   * @memberof RegisterPolicyholderComponent
   */
  getPolicyHolderData() {
    this.api.get('/user/' + this.id + '/' + this.isEncoded).subscribe(
      (res: RegisterPolicyholder) => {
        this.policyHolder = res,
          console.log(this.policyHolder);
        // this.policyHolder.aadharDoc = 'http://docurl';
        if (!this.isAgent) {
          this.requestedUserId = this.policyHolder.id;
          this.text="Submit";
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

  /**
   * initializeForm method for validating the formcontrol fields
   * @param {RegisterPolicyholder} policyHolder
   * @memberof RegisterPolicyholderComponent
   */
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

  /**
   *
   * onSubmit method for registering the data that was filled by registerForm1 form group
   * @memberof RegisterPolicyholderComponent
   */
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
    this.router.navigate(['/agent-dashboard']);

  }
}



