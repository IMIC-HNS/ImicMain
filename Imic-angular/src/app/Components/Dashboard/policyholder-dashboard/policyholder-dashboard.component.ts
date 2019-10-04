import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Policyholderdetails} from './policyholderdetails';
import {CommonService} from 'src/app/Core/common.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {RegisterPolicyholder} from '../../Register/register-policyholder/register-policyholder';
import {LoginServiceService} from '../../login/login-service.service';
import { ApiService } from 'src/app/Core/api.service';
import { PolicyholderregistrationService } from '../../Register/register-policyholder/policyholderregistration.service';
import { Claim } from './claim';

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
  decideClaim='/policyholder/claim/';
  /**
   *
   * @type {RegisterPolicyholder} userPolicydetail show the details that was submitted by registerpolicyholder form
   * @memberof PolicyholderDashboardComponent
   */

  docUrl="/policyholder/";
  
  amount:string

  userPolicydetail: RegisterPolicyholder = new RegisterPolicyholder();
  file: any;
  showClaim:boolean=false;
  currentFileUpload: File;
  selectedFiles: FileList;
  claimed: boolean=false;


  /**
   *Creates an instance of PolicyholderDashboardComponent.(constructor)
   * @param {ApiService} api instance of api service used for get mapping
   * @param {FormBuilder} fb instance of FormBuilder
   * @param {CommonService} commonService for policy detailing
   * @param {LoginServiceService} logout for logging out policyholder dashboard
   * @memberof PolicyholderDashboardComponent
   */
//  constructor(private api:ApiService,private fb: FormBuilder, private commonService: CommonService, public logout: LoginServiceService) {
  constructor(private api:ApiService,private policyholderregistrationService: PolicyholderregistrationService,private fb: FormBuilder, private commonService: CommonService, public logout: LoginServiceService,private http:HttpClient) {

    this.loggedInUser = commonService.loggedInUser;
    console.log('user loggedIn' + JSON.stringify(this.loggedInUser));
  }

  
  ngOnInit() {

    this.api.get(this.url + this.loggedInUser.id + '/' + this.isEncoded).subscribe(
        (res: RegisterPolicyholder) => {
        this.userPolicydetail = res;
        if(this.userPolicydetail.claim){
          this.showClaim=true;
        }
        console.log(res);
      },
      error => console.error()
    );  
  }

viewDoc(){
  this.api.download(this.docUrl+this.userPolicydetail.id).subscribe(
    (response) => {
  

  var blob = new Blob([response], {type:'application/pdf'});
  var url = URL.createObjectURL(blob);
  window.open(url,'_blank');
    }, error=>console.log(error) );
}
viewClaimDoc(){
  this.api.download(this.decideClaim+this.userPolicydetail.id).subscribe(
    (response) => {
  
  var blob = new Blob([response], {type:'application/pdf'});
  var url = URL.createObjectURL(blob);
  window.open(url,'_blank');
    }, error=>console.log(error) );
}

  claim() {
    this.claimed=true;
    console.log('claimed');
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    console.log(this.selectedFiles.item(0));
    this.currentFileUpload = this.selectedFiles.item(0);
    this.policyholderregistrationService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!' + JSON.stringify(event));
        
        this.userPolicydetail.claim=new Claim(undefined,event.body,undefined,undefined)
        console.log(this.userPolicydetail);
      }
    });
    
    this.selectedFiles = undefined;
  }

apply(){
  console.log(this.amount);
    this.userPolicydetail.claim.status="CLAIMED";
    this.userPolicydetail.claim.amount=this.amount;
    console.log(this.userPolicydetail.claim.amount); 
    this.api.post(this.docUrl+"claim/"+this.userPolicydetail.id,this.userPolicydetail.claim).subscribe(
      res=>alert("Successfully Claimed"),
      error=>console.log(error)
    );
}
}
