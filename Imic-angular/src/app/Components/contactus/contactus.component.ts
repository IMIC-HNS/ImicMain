import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { ContactUs } from 'src/app/Components/contactus/contactus';
import { ContactusService } from './contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
    
  private contact:ContactUs = new ContactUs("","","", "", "", "");

  constructor(
    private contactusService: ContactusService
  ) { }


  ngOnInit() {
    //this.onSubmit();
  }
  createPolicyHolder():void{
    this.contactusService.createPolicyHolder(this.contact)
    .subscribe(data=>{
      alert("Details sent");
    });
  };

  // onSubmit() {
    
  //   console.log(this.contact);
  // }
}

