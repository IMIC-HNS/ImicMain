import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ApiService } from 'src/app/Core/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.get("/getphholders");
    console.log(this.apiService.get);

    this.apiService.get("/hjghj");
    console.log(this.apiService.get);

  }

}
