import {CrudRepository} from './index.js';

class CommentRepository extends CrudRepository{
    constructor(model){
        super(model);
    }
}
export default CommentRepository;