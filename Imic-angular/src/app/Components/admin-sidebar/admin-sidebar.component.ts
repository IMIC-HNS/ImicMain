import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';

/**
 *
 *Component for Adminsidebar 
 * @export
 * @class AdminSidebarComponent (use for working of Admin side bar)
 * @implements {OnInit}
 */
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(public loginService: LoginServiceService) { }

  ngOnInit() {
  }
  
  /**
   *
   *method named logout for logging out of the user's dashboard
   * @memberof AdminSidebarComponent
   */
  logout() {
    this.loginService.logout();
  }

}
