import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//import { HttpClient } from '@angular/common/http';
import { AgentregistrationServiceService } from 'src/app/Components/Register/register-agent/agentregistration-service.service';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private routes: Router,
    private _agentService: AgentregistrationServiceService) { }

   // private url="http://localhost:8080/register/agent";

  ngOnInit() {
    this.registerForm = this.fb.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password:['',Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
    
  });

}
get f() { return this.registerForm.controls; }

onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
  }

  this._agentService.postData(this.registerForm.value)
  .subscribe(
    (data =>console.log("data posted"+data)),
    (error=>console.log(error))
  );
  
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}