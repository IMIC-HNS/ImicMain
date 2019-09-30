import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

//import { HttpClient } from '@angular/common/http';
import { AgentregistrationServiceService } from 'src/app/Components/Register/register-agent/agentregistration-service.service';
import { HomeComponent } from '../../home/home.component';

/**
 *
 *Component for agent registration
 * @export
 * @class RegisterAgentComponent
 * @implements {OnInit}
 */
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
    private _agentService: AgentregistrationServiceService
    , private router: Router) { }

   

  ngOnInit() {
    this.registerForm = this.fb.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: [new Date(), Validators.required],
    
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
    (data =>{
      console.log("data posted"+data);
      if(data==null)
        alert("Email already exists \n Please use a unique Email to continue")
      else{
        alert("AGENT DATA HAS BEEN SUBMITTED");     
        this.router.navigate(['/admin-dashboard']);
      } 
      }),
    (error=>console.log(error))
  );

  
  
  
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
  this.router.navigate(['/home']);

}
}
