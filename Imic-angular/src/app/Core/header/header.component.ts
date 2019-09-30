import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private commonService: CommonService, private location: Location) { 
    this.isLoggedIn = commonService.loggedInUser != null;
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }



}
