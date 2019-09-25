import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ApiService } from 'src/app/Core/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  url="/dashboard/getByStatus?status=SUBMITTED";
  decisionUrl="/dashboard/decision/";
  agents: Object=[];
  policyHolders: Object=[];
  id:String;
  updatedUser={};

  constructor(private commonService:CommonService,private api:ApiService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.api.get(this.url).subscribe(
      response=>
      {
        this.policyHolders=response;
        console.log(this.policyHolders);
      }  ,
      error=>console.log(error)
    );

    this.api.get("/dashboard/getAgents").subscribe(
      response=>{
        this.agents=response,
        console.log(this.agents);
      },
      error=>console.log(error)
    );
    console.log(this.agents);

  }

  

  approval(id)

{    
    console.log(id);
    this.api.post(this.decisionUrl+ id + "?status=ACCEPTED", {}).subscribe(
      response=>
      {this.updatedUser=response;
        console.log(this.updatedUser);
        alert("Approval Successful");
        this.router.navigate([this.route]);
      },
      error=>console.log(error)

    );
  }
rejection(id)
{
  this.api.post(this.decisionUrl+id+"?status=REJECTED",{}).subscribe(
    response=>{this.updatedUser=response;
      console.log(this.updatedUser);
      alert("Rejection Successful")
      
    },
    error=>console.log(error)
  );
}
showAlert (holder){
  holder.myValue = true;  
};

}
