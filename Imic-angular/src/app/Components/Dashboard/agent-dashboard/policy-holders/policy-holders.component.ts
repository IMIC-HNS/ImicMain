import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Core/api.service';
import { CommonService } from 'src/app/Core/common.service';

@Component({
  selector: 'app-policy-holders',
  templateUrl: './policy-holders.component.html',
  styleUrls: ['./policy-holders.component.css']
})
export class PolicyHoldersComponent implements OnInit {

  constructor(private api:ApiService,private commonService:CommonService) { }
policyInitialised:any=[]
policySubmitted:any=[]
  ngOnInit() {
    this.api.get("/dashboard/"+this.commonService.loggedInUser.city+"?status=INITIALISED").subscribe(
      response=>{
        this.policyInitialised=response;
        console.log(this.policyInitialised)
      },
      error=>console.log(error)
    )
  

  this.api.get("/dashboard/"+this.commonService.loggedInUser.city+"?status=SUBMITTED").subscribe(
    response=>{
      this.policySubmitted=response;
      console.log(this.policySubmitted)
    },
    error=>console.log(error)
  )
}
    
}
