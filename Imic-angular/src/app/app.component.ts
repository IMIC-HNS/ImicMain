import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy} from './policy';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private commonService:CommonService) {
    
  } 
  
  
  ngOnInit() {
    this.commonService.getPolicies();
  }
}
