
export class RegisterAgent
{

    /**
     *Creates an instance of RegisterAgent.(Constructor)
     * @param {string} firstName for storing the first name of the agent
     * @param {string} lastName  for storing the last name of the agent
     * @param {string} password  for storing the password of the agent
     * @param {string} email  for storing the email of the agent
     * @param {string} mobileNumber  for storing the phone number of the agent
     * @param {string} city  for storing the city of the agent
     * @param {Date} dob  for storing the date of birth of the agent
     * @memberof RegisterAgent  
     */
    constructor(
        public firstName:string,
        public lastName:string,
        public password:string,
        public email:string,
        public mobileNumber:string,
        public city:string,
        public dob:Date
    )
    {}
}