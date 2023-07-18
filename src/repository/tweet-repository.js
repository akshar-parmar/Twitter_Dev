const tweet = require('../models/tweet');

class TweetRepository {
    //lets build CRUD
    
   async create(data){
    try {
        const tweetSample = await tweet.create(data);
        return tweetSample;
    } catch (error) {
        console.log("Something went wrong in tweetRepository");
    }

   };

   async get(tweetId){
    try {
        const tweetSample = await tweet.findById(tweetId);
        return tweetSample;
    } catch (error) {
        console.log("Something went wrong in tweetRepository");
    }

   };

   async getTweetWithComments(tweetId){
    try {
        const tweetSample = await tweet.findById(tweetId).populate('comments');
        return tweetSample;
    } catch (error) {
        console.log("Something went wrong in tweetRepository");
    }
   }

    async update(tweetId,data){
        try {
            const tweetSample = await tweet.findByIdAndUpdate(tweetId,data,{new : true});
            return tweetSample;
        } catch (error) {
            console.log("Something went wrong in tweetRepository");
        }
    };

    async destroy(tweetId){
        try {
            const tweetSample = await tweet.findByIdAndDelete(tweetId);
            return tweetSample;
        } catch (error) {
            console.log("Something went wrong in tweetRepository");
        }


    };
}
module.exports = TweetRepository;