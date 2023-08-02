import Tweet from '../models/tweet.js'
import Comment from '../models/comment.js'

class TweetRepository {
    //lets build CRUD
    
   async create(data){
    try {
        const tweetSample = await Tweet.create({
            content : data.content,
            image : data.image,
            user : data.userId
        });
        return tweetSample;
    } catch (error) {
        console.log("Something went wrong in tweetRepository");
    }

   };

   async get(tweetId){
    try {
        const tweetSample = await Tweet.findById(tweetId).populate('likes');
        return tweetSample;
    } catch (error) {
        console.log(error);
        console.log("Something went wrong in tweetRepository");
    }

   }





    async destroy(tweetId){
        try {
            const tweetSample = await Tweet.findByIdAndDelete(tweetId);
            return tweetSample;
        } catch (error) {
            console.log("Something went wrong in tweetRepository");
        }

    };

    async getAll(offset,limit){
        try {
            const tweetSample = await Tweet.find().skip(offset).limit(limit);
            return tweetSample;
        } catch (error) {
            console.log("Something went wrong in tweetRepository");
        }
    }

    async addHashtagIds(tweetId,allHashtagIds){
        try {
            //console.log("Adding hastagIds to tweet");
            const response = await Tweet.findByIdAndUpdate(
                tweetId,
                { $addToSet: { hashtags: { $each: allHashtagIds } } },
                { new: true }
              );
              return response;
        } catch (error) {
            console.log("Something went wrong in tweetRepository");
        }
    }

    async getTweetWithComments(tweetId){
        try {
            const response = await Tweet.findById(tweetId)
      .populate({
        path: 'comments',
        model: Comment,
        populate: {
          path: 'comments',
          model: Comment,
            populate : {
                path: 'comments',
                model: Comment,
            }
        },
      })
      .exec();
            return response;
        } catch (error) {
            console.log("Something went wrong in tweetRepository");
        }
    }



}
export default TweetRepository;