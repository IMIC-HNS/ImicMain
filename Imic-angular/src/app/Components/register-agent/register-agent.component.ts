import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AgentregistrationServiceService } from 'src/app/agentregistration-service.service';

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
    private _agentService: AgentregistrationServiceService,private http:HttpClient) { }

   // private url="http://localhost:8080/register/agent";

  ngOnInit() {
    this.registerForm = this.fb.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password:['',Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
    
  });

}
get f() { return this.registerForm.controls; }

onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
  }// display form values on success
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  //console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));


  // this.http.post<any>(this.url,this.registerForm.value);
  // return this.http.post(this.url,this.registerForm.value);
  //console.log(this.http.post<any>(this.url,this.registerForm.value));


  //this.http.post<any>(this.url,this.registerForm.value);
  //console.log(this.http.post<any>(this.url,this.registerForm.value));

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