import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/Core/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPolicy = [];
  constructor(private commonService: CommonService) {
     this.myPolicy = commonService.myPolicy;
    //  console.log("policy in home" + this.myPolicy);
   }

  ngOnInit() {

  }

}
