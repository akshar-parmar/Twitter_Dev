import {LikeRepository,TweetRepository} from '../repository/index.js';
import Like from '../models/likes.js';
import Tweet from '../models/tweet.js';
class LikeService{
    constructor(){
        this.likerepository = new LikeRepository(Like);
        this.tweetrepository = new TweetRepository(Tweet);

    }

    //now write the logic for like
    async toggleLike(modelType , modelId, userId){
        if(modelType=='Tweet'){
            var TweetObject = await this.tweetrepository.get(modelId);
            console.log("OBJECT ....",TweetObject);

        }
        else if(modelType =='Comment'){
            //todo
        }
        else{
            throw new Error('unknown model type')
        }

        //let see if user has liked the tweet or not
        const exists = await this.likerepository.findByUserAndLikeable({
            onModel :modelType ,
            likeable : modelId,
            user : userId
        });
        console.log("EXISTSS---",exists);

        if(exists!= null){
            //if like exist by same user on same tweet then we need to remove it
            //we are now deleting the like from tweet
            TweetObject.likes.pull(exists.id);
            await TweetObject.save();

            //now let's delete it from like collection also
            const deleteLikeFromCollection = await this.likerepository.destroy(exists.id);
            console.log("deleteLikeFromCollection",deleteLikeFromCollection);
        }
        else{
            //else like doesnt exist then like the tweet 
            const addLike = await this.likerepository.create({
                onModel :modelType ,
                likeable : modelId,
                user : userId

            });
            console.log("Adding LIKE ",addLike);

            TweetObject.likes.push(addLike.id);
            await TweetObject.save();

            //now we need to add the likeId in tweet as well

        }
        return true;

    };
}
export default LikeService;