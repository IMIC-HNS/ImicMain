import {Component, OnInit, Input} from '@angular/core';
import {CommonService} from 'src/app/Core/common.service';
import {Router} from '@angular/router';

/**
 *
 *Component for home which consist all the details of policies displaying on the front page of the application
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPolicy = [];

  /**
   *Creates an instance of HomeComponent.(Constructor)
   * @param {CommonService} commonService
   * @param {Router} router
   * @memberof HomeComponent
   */
  constructor(private commonService: CommonService, private router: Router) {
    this.myPolicy = commonService.myPolicy;
  }

  /**
   *
   *method contactus for fetching the policyid 
   * @param {*} id
   * @memberof HomeComponent
   */
  contactUs(id) {
    console.log(id);
    this.commonService.policyId = id;
    this.router.navigate(['/contact-us']);
  }

  ngOnInit() {

  }

}
