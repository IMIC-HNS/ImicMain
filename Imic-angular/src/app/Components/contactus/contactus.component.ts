import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactUs } from 'src/app/Components/contactus/contactus';
import { ContactusService } from './contactus.service';
import { CommonService } from 'src/app/Core/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact: ContactUs = new ContactUs('', '', '', '', '', '');

  policyId: string;
  policyName: string;
  constructor(
    private contactusService: ContactusService, private commonService: CommonService
    , private router: Router
  ) { }


  ngOnInit() {
    this.contact.policyNumber = this.commonService.policyId;
    console.log(this.policyId);
    this.commonService.policyId = undefined;
  }
  createPolicyHolder(): void {
    console.log(this.commonService.myPolicy);
    this.contactusService.createPolicyHolder(this.contact)
    .subscribe(data => {
      alert('YOUR DETAILS HAVE BEEN SENT TO OUR ADMINISTRATION');
      this.router.navigate(['/home']);
    });


  }

  // onSubmit() {

  //   console.log(this.contact);
  // }
}

