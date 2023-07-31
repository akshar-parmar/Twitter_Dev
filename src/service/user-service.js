import {UserRepository} from '../repository/index.js';
import User from '../models/users.js';
class UserService{
    constructor(){
        this.userRepository = new UserRepository(User);
    }
    async signup(data){
        try {
            const user  = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw {error};
            //console.log("something went wrong in userservice");
        }
    }

    async signIn(data){
        try {
            //console.log(data);  //we will get email and password by user

        //step1 : make sure that email given by user exist in db or not
        const user = await this.userRepository.findBy(data.email);
        //if user is not found then email given is wrong
        if(!user){
            throw {
                message : 'user not found with corresponding email'
            }
        }
        //console.log("user details we got using email",user);
        

        //step2 : now we have verified the email and its time to verify the password
        if(!user.comparePassword(data.password)){
            //comparePassword is a userSchema method
            //if password is not matched then password given is wrong
            throw {
                message : 'password incorrect'
            }
        }

        //step 3 : now that email and password are verified , simply generate the token
        //genJWT is userSchema method 
        //all the instance of User model can use this userSchema functions
        const token = user.genJWT();
        return token;
        } catch (error) {
            throw error;
        }
        
        
    }
}
export default UserService;