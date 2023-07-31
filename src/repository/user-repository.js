import {CrudRepository} from './index.js';
import User from '../models/users.js';
class UserRepository extends CrudRepository{
    constructor(model){
        super(model);
    }
    //any other function you want specific other than crudrepository you can add them
    async findBy(data){
        try {
            const response = await User.findOne({
                email : data
            });
            return response;
        } catch (error) {
            //throw error;
            console.log("something went wrong in the user-repository");
        }

    }
}
export default UserRepository;
