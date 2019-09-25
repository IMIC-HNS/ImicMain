import { Nominee } from './Nominee';

export class RegisterPolicyholder 
{
    constructor(
        public firstName:string,
        public lastName:string,
        public email:string,
        public mobileNumber:string,
        public policyNumber:string,
        public city:string,
        public aadhar:string,
        public dob:string,
        public aadharDoc:string,
        public nominee:Nominee
    )
    {}
}