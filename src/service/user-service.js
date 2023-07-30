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
            console.log("something went wrong in userservice");
        }
    }
}
export default UserService;