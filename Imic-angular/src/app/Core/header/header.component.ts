import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Location } from '@angular/common';

/**
 *Component class for header
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  /**
   *Creates an instance of HeaderComponent.(Constructor)
   * @param {CommonService} commonService for policy detailings over front page
   * @param {Location} location for tracking the record of web pages
   * @memberof HeaderComponent
   */
  constructor(private commonService: CommonService, private location: Location) { 
    this.isLoggedIn = commonService.loggedInUser != null;
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }



}
