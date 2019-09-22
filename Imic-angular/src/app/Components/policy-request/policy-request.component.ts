import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Core/api.service';

@Component({
  selector: 'app-policy-request',
  templateUrl: './policy-request.component.html',
  styleUrls: ['./policy-request.component.css']
})
export class PolicyRequestComponent implements OnInit {
  id: string;

  constructor(private api:ApiService) { }
  url="/getByStatus";
  decisionUrl="/decision/";
  policyHolder:any=[];
 updatedUser={};
  

    myvalue = false;
  
    showAlert (){
      this.myvalue = true;  
    };

  //   mongoObjectId = function (id) {
  //     var timestamp = this.id.timestamp.toString(16);
  //     return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
  //         return (Math.random() * 16 | 0).toString(16);
  //     }).toLowerCase();
  // };
  
  approval(id)
  // { this.id=this.mongoObjectId(id);
{     this.id="5d84d241e123af83e1093d81";
    console.log(this.id);
    this.api.post(this.decisionUrl+ this.id + "?status=ACCEPTED", {}).subscribe(
      response=>this.updatedUser=response,
      error=>console.log(error)

    );
  }
rejection(id)
{
  this.api.post(this.decisionUrl+this.id+"?status=REJECTED",{}).subscribe(
    response=>this.updatedUser=response,
    error=>console.log(error)
  );
}

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
  