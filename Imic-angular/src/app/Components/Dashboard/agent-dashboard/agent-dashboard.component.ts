import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Core/common.service';
import { ApiService } from 'src/app/Core/api.service';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {
  constructor(private commonService:CommonService, private api: ApiService) { }
   policyHolders: any= [];
  ngOnInit() {
    this.api.get("/dashboard/" + this.commonService.loggedInUser.id + "/policyHolders").
    subscribe(response=> { 
      this.policyHolders = response;
      console.log(response);
    }, error=>console.log(error)
  );
    console.log(this.policyHolders);
    }
  }
  // this.api.get("/dashboard/" + this.commonService.loggedInUser.id + "/policyHolders").



