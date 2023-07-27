import {CrudRepository} from './index.js';

class UserRepository extends CrudRepository{
    constructor(model){
        super(model);
    }
    //any other function you want specific other than crudrepository you can add them
}
export default UserRepository;
