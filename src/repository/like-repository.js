import Like from "../models/likes.js";
import {CrudRepository} from "./index.js";

class LikeRepository extends CrudRepository{
    constructor(model){
        super(model);
    }

    async findByUserAndLikeable(data){
        try {
            const response = await Like.findOne(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in like-repository");
        }
    }


}

export default LikeRepository;