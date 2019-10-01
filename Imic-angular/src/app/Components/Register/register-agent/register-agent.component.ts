import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AgentregistrationServiceService } from 'src/app/Components/Register/register-agent/agentregistration-service.service';
import { HomeComponent } from '../../home/home.component';

/**
 *
 *Component class for agent registration
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

  /**
   *
   * @type {FormGroup} registerForm name of the Agent html form
   * @memberof RegisterAgentComponent
   */
  registerForm: FormGroup;
  submitted = false;

  /**
   *Creates an instance of RegisterAgentComponent.(Constructor)
   * @param {FormBuilder} fb instance of formbuilder
   * @param {Router} routes used for routing
   * @param {AgentregistrationServiceService} _agentService instance of agentRegistrationservice
   * @param {Router} router
   * @memberof RegisterAgentComponent
   */
  constructor(private fb: FormBuilder,
    private routes: Router,
    private _agentService: AgentregistrationServiceService
    , private router: Router) { }

  
  /**
   *ngOninit method for validating the formcontrols of the registerForm formgroup
   * @memberof RegisterAgentComponent
   */
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

/**
 *
 *Method onsubmit for submitting the data of agent via agent registration form 
 * post the data by calling the agentService
 * @memberof RegisterAgentComponent
 */
onSubmit() {
  this.submitted = true;
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
