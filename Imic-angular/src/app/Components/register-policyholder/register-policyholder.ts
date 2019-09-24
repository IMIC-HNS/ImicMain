export class RegisterPolicyholder 
{
    constructor(
        public firstname:string,
        public lastname:string,
        public email:string,
        public mobileNumber:string,
        public policyNumber:Number,
        public city:string,
        public aadhar:Number,
        public dateOfBirth:Date,
        public aadhardoc:Document,
        public nomine:string,
        public relation:string,
        public aadharno:Number
    )
    {}
}