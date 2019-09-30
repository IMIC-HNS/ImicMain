import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Core/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/Core/common.service';

@Component({
  selector: 'app-policy-request',
  templateUrl: './policy-request.component.html',
  styleUrls: ['./policy-request.component.css']
})
export class PolicyRequestComponent implements OnInit {
  id: string;
  userPolicydetail: {};
  showPolicyUser = false;

  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router,private commonService:CommonService) { }
  url="/dashboard/getByStatus?status=REQUESTED";
  // decisionUrl="/decision/";
  policyHolder:any=[];
 updatedUser={};
  

  
    showAlert (holder){
      this.userPolicydetail = holder;
      this.showPolicyUser = true;
    };


  ngOnInit() {
  
    this.api.get(this.url).subscribe(
      response=>
      {
        this.policyHolder=response;
        console.log(this.policyHolder);
      }  ,
      error=>console.log(error)
    );
   
  }

}
