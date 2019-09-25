import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { ContactUs } from 'src/app/Components/contactus/contactus';
import { ContactusService } from './contactus.service';
import { CommonService } from 'src/app/Core/common.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  private contact:ContactUs = new ContactUs("","","", "", "", "");

  policyId:Number;
  policyName:String
  constructor(
    private contactusService: ContactusService,private commonService:CommonService
  ) { }


  ngOnInit() {
    this.policyId=this.commonService.policyId;
    console.log(this.policyId);
    this.policyName=this.commonService.myPolicy[0].description;
  }
  createPolicyHolder():void{
    console.log(this.commonService.myPolicy);
    this.contactusService.createPolicyHolder(this.contact)
    .subscribe(data=>{
      alert("Details sent");
    });
  };

  // onSubmit() {
  
  //   console.log(this.contact);
  // }
}

