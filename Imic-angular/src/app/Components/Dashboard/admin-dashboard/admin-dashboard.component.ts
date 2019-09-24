import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ApiService } from 'src/app/Core/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  agents: Object;
  policyHolders: Object;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.get("/dashboard/getPolicyHolder").subscribe(
      response=>this.policyHolders=response,
      error=>console.log(error)
    )
    console.log(this.apiService.get);

    this.apiService.get("/dashboard/getAgents").subscribe(
      response=>this.agents=response,
      error=>console.log(error)
    );
    console.log(this.apiService.get);

  }

}
