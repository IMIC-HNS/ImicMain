import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

/**
 *
 *Component class for login
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted: boolean;
  dashBoard:any;
  userData:any;

  /**
   *Creates an instance of LoginComponent.(Constructor)
   * @param {FormBuilder} formBuilder 
   * @param {Router} routes for routing purpose
   * @param {LoginServiceService} LoginServiceService calling the service connection for loginuser
   * @memberof LoginComponent
   */
  constructor(private formBuilder: FormBuilder, private routes: Router,
    private LoginServiceService:LoginServiceService) { }

  /**
   *
   *Oninit method for applying the validations on respective formcontrols of thr formgroup
   * @memberof LoginComponent
   */
  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.login.controls; }

  /**
   *
   *Submit method for submitting the value of login user and provide their respective dashboard
   * @memberof LoginComponent
   */
  onSubmit() {
  console.log(this.login.value);
  this.dashBoard=this.LoginServiceService.login(this.login.value);
  console.log(this.dashBoard);
   }

}
