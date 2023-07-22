import Tweet from '../models/tweet.js'

class TweetRepository {
    //lets build CRUD
    
   async create(data){
    try {
        const tweetSample = await Tweet.create({
            content : data.content
        });
        return tweetSample;
    } catch (error) {
        console.log("Something went wrong in tweetRepository");
    }

   };

   async get(tweetId){
    try {
        const tweetSample = await Tweet.findById(tweetId).populate('hashtags');
        return tweetSample;
    } catch (error) {
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
            console.log("Adding hastagIds to tweet");
            const response = await Tweet.findByIdAndUpdate(
                tweetId,
                { $addToSet: { hashtags: { $each: allHashtagIds } } },
                { new: true }
              );
              return response;
        } catch (error) {
            
        }
    }



}
export default TweetRepository;