import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getAgents();
    console.log(this.commonService.agents);

    this.commonService.getPolicyHolders();
    console.log(this.commonService.policyHolders);

  }

}
