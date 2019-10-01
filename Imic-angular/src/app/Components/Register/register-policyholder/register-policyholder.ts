import { Nominee } from './Nominee';

/**
 * @class Claim for submitting the updated status of claim taken by the policyholder
 */
class Claim {
  status: string;
}

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
  public claim: Claim = new Claim()
    constructor(
    ) {}
}
