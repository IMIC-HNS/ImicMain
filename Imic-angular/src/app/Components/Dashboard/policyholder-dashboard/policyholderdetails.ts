export class Policyholderdetails 
{
  id: any;
    /**
     *Creates an instance of Policyholderdetails.(Constructor)
     * @param {string} firstName for displaying the stored first name of policyholder
     * @param {string} lastName for displaying the stored last name of policyholder
     * @param {string} email for displaying the stored email of policyholder
     * @param {string} mobileNumber for displaying the stored mobile number of policyholder
     * @param {Number} policyNumber for displaying the stored policy number of policyholder
     * @param {string} city for displaying the stored city of policyholder
     * @param {Number} aadhar for displaying the stored aadhar number of policyholder
     * @param {Date} dob for displaying the stored date of birth of policyholder
     * @param {Document} aadhardoc for displaying the stored aadhar document of policyholder
     * @param {string} nomine for displaying the stored name of nominee
     * @param {string} relation for displaying the stored relation of nominee
     * @param {Number} aadharno for displaying the stored aadhar number of nominee
     * @memberof Policyholderdetails
     */
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