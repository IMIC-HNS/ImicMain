import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Core/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-policy-request',
  templateUrl: './policy-request.component.html',
  styleUrls: ['./policy-request.component.css']
})
export class PolicyRequestComponent implements OnInit {
  id: string;

  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router) { }
  url="/dashboard/getByStatus?status=REQUESTED";
  // decisionUrl="/decision/";
  policyHolder:any=[];
 updatedUser={};

  
    showAlert (holder){
      holder.myvalue = true;  
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
  