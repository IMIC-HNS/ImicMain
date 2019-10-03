import { Nominee } from './Nominee';
import { Claim } from '../../Dashboard/policyholder-dashboard/claim';



/**
 * @class Claim for submitting the updated status of claim taken by the policyholder
 */


/**
 *Class for RegisterPolicyholder that consists of all the fields required in the form
 * @export
 * @class RegisterPolicyholder
 */
export class RegisterPolicyholder {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public mobileNumber: string;
  public policyNumber: string;
  public city: string;
  public aadhar: string;
  public dob: string;
  public aadharDoc: any;
  public nominee: Nominee = new Nominee();
  public claim: Claim = new Claim(undefined,undefined,undefined,undefined);
    constructor(
    ) {}
}
