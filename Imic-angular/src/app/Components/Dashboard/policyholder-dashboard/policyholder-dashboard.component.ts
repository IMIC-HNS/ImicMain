import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Policyholderdetails } from './policyholderdetails';
import { CommonService } from 'src/app/Core/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-policyholder-dashboard',
  templateUrl: './policyholder-dashboard.component.html',
  styleUrls: ['./policyholder-dashboard.component.css']
})
export class PolicyholderDashboardComponent implements OnInit {
  url="http://localhost:8080/user/";
  registerForm2: FormGroup;
  loggedInUser : any = {};
  isEncoded = false;
  id: string;

  private Userpolicydetails:Policyholderdetails=new Policyholderdetails("","","", "", 0, "",undefined,new Date(),new Document(),"","",undefined)
 
  constructor(private fb: FormBuilder,private commonService:CommonService,private http:HttpClient) {
  this.loggedInUser = commonService.loggedInUser;
  console.log("user loggedIn" + JSON.stringify(this.loggedInUser));
}

  policydetails:any;
  ngOnInit() {
  
    this.http.get(this.url+ this.id + '/' + this.isEncoded).subscribe(
      res=>
      { this.policydetails=res,
        console.log(this.policydetails);
    this.registerForm2 = this.fb.group({
      id: [this.policydetails.id],
      firstName: [this.policydetails.firstName],
      lastName: [this.policydetails.lastName,],
      email: [this.policydetails.email],
      mobileNumber: [this.policydetails.mobileNumber],
      policyNumber: [this.policydetails.policyNumber],
      city: [this.policydetails.city],
      aadhar: [this.policydetails.aadhar],
      dob: [this.policydetails.dob],
      aadhardoc: [this.policydetails.aadhardoc],
      nomine:[this.policydetails.nomine],
      relation:[this.policydetails.relation],
      aadharno:[this.policydetails.aadharno]
  })
  },
  error=>console.error()
    )
}

}