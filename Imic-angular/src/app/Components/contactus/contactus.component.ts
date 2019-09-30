import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ContactUs} from 'src/app/Components/contactus/contactus';
import {ContactusService} from './contactus.service';
import {CommonService} from 'src/app/Core/common.service';
import {Router} from '@angular/router';

/**
 *Component for ContactusForm
 * @export
 * @class ContactusComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact: ContactUs = new ContactUs('', '', '', '', '', '');

  /**
   *
   * @type {string} policyId  id for each policy
   * @memberof ContactusComponent
   */
  policyId: string;

  /**
   *
   * @type {string} policyName name for each policy
   * @memberof ContactusComponent
   */
  policyName: string;

  constructor(private contactusService: ContactusService, public commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
    this.contact.policyNumber = this.commonService.policyId;
    console.log(this.policyId);
    this.commonService.policyId = undefined;
  }

  /**
   *Method for creating new policyholder via contactus form
   * @memberof ContactusComponent
   */
  createPolicyHolder(): void {
    console.log(this.commonService.myPolicy);
    this.contactusService.createPolicyHolder(this.contact)
      .subscribe(data => {
        alert('YOUR DETAILS HAVE BEEN SENT TO OUR ADMINISTRATION');
        this.router.navigate(['/home']);
      });

  }
}

