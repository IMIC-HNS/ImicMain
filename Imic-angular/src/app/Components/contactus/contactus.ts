export class ContactUs
{
    /**
     *Creates an instance of ContactUs.(Constructor)
     * @param {string} firstName for storing first name of new policyholder
     * @param {string} lastName  for storing last name of new policyholder
     * @param {string} email  for storing email address of new policyholder
     * @param {string} mobileNumber for storing mobile number of new policyholder
     * @param {string} policyNumber for storing the details of policy taken by new policyholder
     * @param {string} city  for storing the city of new policyholder
     * @memberof ContactUs
     */
    constructor(
        public firstName:string,
        public lastName:string,
        public email:string,
        public mobileNumber:string,
        public policyNumber:string,
        public city:string   
    )
    {}
}