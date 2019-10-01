import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy} from './policy';
import { CommonService } from './Core/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private commonService:CommonService) {
  } 
  
  /**
   *
   *this ngOnInit method always execute whenever soemone hit the url and this method get the details of all the policies
   * @memberof AppComponent
   */
  ngOnInit() {
    this.commonService.getPolicies();
  }
}
