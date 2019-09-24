export class RegisterPolicyholder 
{
    constructor(
        public firstName:string,
        public lastName:string,
        public email:string,
        public mobileNumber:string,
        public policyNumber:Number,
        public city:string,
        public aadhar:Number,
        public dob:Date,
        public aadhardoc:Document,
        public nomine:string,
        public relation:string,
        public aadharno:Number
    )
    {}
}