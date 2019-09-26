import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/Core/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import {CommonService} from '../../../Core/common.service';
import { LoginServiceService } from '../../login/login-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  url = '/dashboard/getByStatus?status=SUBMITTED';
  decisionUrl = '/dashboard/decision/';
  // tslint:disable-next-line:ban-types
  agents: Object = [];
  // tslint:disable-next-line:ban-types
  policyHolders: Object = [];
  id: string;
  updatedUser = {};

  constructor(private commonService: CommonService, private api: ApiService,
              private router: Router, private route: ActivatedRoute,private logout:LoginServiceService) { }

  ngOnInit() {
    this.api.get(this.url).subscribe(
      response => {
        this.policyHolders = response;
        console.log(this.policyHolders);
      }  ,
      error => console.log(error)
    );
      console.log(sessionStorage.activeUser);
      console.log(sessionStorage.activePassword);
    this.api.get('/dashboard/getAgents').subscribe(
      response => {
        this.agents = response;
        console.log(this.agents);
      },
      error => console.log(error)
    );
    console.log(this.agents);

  }



  approval(id) {
    console.log(id);
    this.api.post(this.decisionUrl + id + '?status=ACCEPTED', {}).subscribe(
      response => {this.updatedUser = response;
                   console.log(this.updatedUser);
                   alert('Approval Successful');
                   this.router.navigate([this.route]);
      },
      error => console.log(error)

    );
  }
rejection(id) {
  this.api.post(this.decisionUrl + id + '?status=REJECTED', {}).subscribe(
    response => {this.updatedUser = response;
                 console.log(this.updatedUser);
                 alert('Rejection Successful');

    },
    error => console.log(error)
  );
}
showAlert(holder) {
  holder.myValue = true;
}

}
