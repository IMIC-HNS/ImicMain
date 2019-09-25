import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/Core/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPolicy = [];
  policyId:Number;
  constructor(private commonService: CommonService,private router:Router) {
     this.myPolicy = commonService.myPolicy;
    //  console.log("policy in home" + this.myPolicy);
   }
contactUs(id)
{ console.log(id);
  this.commonService.policyId=id;
  this.router.navigate(['/contact-us']);
}
  ngOnInit() {

  }

}
