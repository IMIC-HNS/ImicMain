import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyholderregistrationService } from "src/app/policyholderregistration.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-policyholder',
  templateUrl: './register-policyholder.component.html',
  styleUrls: ['./register-policyholder.component.css']
})
export class RegisterPolicyholderComponent implements OnInit {

  registerForm1: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private routes: Router,private _policyholderService: PolicyholderregistrationService,private http:HttpClient) { }

  ngOnInit() {
    this.registerForm1 = this.fb.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      policyNumber: ['', Validators.required],
      city: ['', Validators.required],
      aadhar: ['', Validators.required],
      dob: ['', Validators.required],
      aadhardoc: ['', Validators.required],
      nomine:['',Validators.required],
      relation:['',Validators.required],
      aadharno:['',Validators.required]
  })
  }
  get f() { return this.registerForm1.controls; }

  onSubmit(){
  this.submitted = true;
  if (this.registerForm1.invalid) {
    alert("policyholder submit");
    console.log(this.registerForm1.value);
    return;
    }
    this._policyholderService.postData(this.registerForm1.value)
  .subscribe(
    (data =>console.log("data posted"+data)),
    (error=>console.log(error))
  );

  }



}