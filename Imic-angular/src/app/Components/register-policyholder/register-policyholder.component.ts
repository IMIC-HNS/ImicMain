import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PolicyholderregistrationService } from "src/app/policyholderregistration.service";
import { HttpClient } from '@angular/common/http';
import { RegisterPolicyholder } from './register-policyholder';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register-policyholder',
  templateUrl: './register-policyholder.component.html',
  styleUrls: ['./register-policyholder.component.css']
})
export class RegisterPolicyholderComponent implements OnInit {
  url="http://localhost:8080/user/";
  registerForm1: FormGroup;
  submitted = false;
  loggedInUser : any = {};
  isAgent = false;
  isEncoded = false;
  id = '';

  private registerpolicyholder:RegisterPolicyholder = new RegisterPolicyholder("","","", "", 0, "",undefined,new Date(),new Document(),"","",undefined);

  constructor(private fb: FormBuilder, private routes: Router, private route: ActivatedRoute, private _policyholderService: PolicyholderregistrationService,private http:HttpClient
    ,private commonService:CommonService) {
      this.loggedInUser = commonService.loggedInUser;
      console.log("user loggedIn" + JSON.stringify(this.loggedInUser));
      this.isAgent = (this.loggedInUser && this.loggedInUser.type === 'AGENT');
      this.isEncoded = !this.isAgent;
      console.log("user type" + this.isAgent);
      this.id = this.route.snapshot.params.id;
     }
  //policyHolder=new RegisterPolicyholder("","","", "", 0, "",0,new Date(),new Document(),"","",0);
  policyHolder:any;
  ngOnInit() {

  this.http.get(this.url+ this.id + '/' + this.isEncoded).subscribe(
    res=>
    { this.policyHolder=res,
      console.log(this.policyHolder);
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
        aadhardoc: [this.policyHolder.aadhardoc],
        nomine:[this.policyHolder.nomine],
        relation:[this.policyHolder.relation],
        aadharno:[this.policyHolder.aadharno]
    })
    },
    error=>console.log(error)
  )
  }
  get f() { return this.registerForm1.controls; }

  onSubmit(){
  this.submitted = true;
  if (this.registerForm1.invalid) {
    alert("policyholder submit");
    console.log(this.registerForm1.value);
    return;
    }
    this._policyholderService.postData(this.registerForm1.value, this.loggedInUser.id)
  .subscribe(
    (data =>console.log("data posted"+data)),
    (error=>console.log(error))
  );
   
  }

  sendMail()
  {
    this.http.post<any>("http://localhost:8080/policyholder/5d88d0ed2e77352b4c41c242",{})
  }
  }



