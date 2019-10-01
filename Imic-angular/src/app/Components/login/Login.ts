export class Login 
{
    /**
     *Creates an instance of Login.(Constructor)
     * @param {string} email for storing the email address for the login user
     * @param {string} password for storing the encoded password of the login user
     * @memberof Login
     */
    constructor
    (
        public email: string,
        public password:string
    ){}
}