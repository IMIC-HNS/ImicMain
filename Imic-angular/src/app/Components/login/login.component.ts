import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted: boolean;
  dashBoard:any;
  // LoginServiceService: any;
  // _authService: any;
//email:String;
  constructor(private formBuilder: FormBuilder, private routes: Router,
    private LoginServiceService:LoginServiceService
    
    ) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.login.controls; }

  onSubmit() {
    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.login.invalid) {
    //   return;
    // }

    // this.LoginServiceService.postData(this.login.value)
    //   .subscribe(
    //     response => console.log("data posted" + response),
    //     error => console.log(error)
    //   );


 this.dashBoard=this.LoginServiceService.login(this.login.value);
console.log(this.dashBoard);


  }

}
