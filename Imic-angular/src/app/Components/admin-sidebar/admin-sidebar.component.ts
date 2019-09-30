import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(public loginService: LoginServiceService) { }

  ngOnInit() {
  }
  
  logout() {
    this.loginService.logout();
  }

}
