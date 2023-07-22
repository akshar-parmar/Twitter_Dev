import Hashtag from '../models/hashtags.js'

class HashtagRepository {
    //lets build CRUD
    
   async create(data){
    try {
        const hashtagSample = await Hashtag.create({
            title : data.title
        });
        return hashtagSample;
    } catch (error) {
        console.log("Something went wrong in HashtagRepository");
    }

   };

   async get(hashtagId){
    try {
        const hashtagSample = await Hashtag.findById(hashtagId).populate('tweets');
        return hashtagSample;
    } catch (error) {
        console.log("Something went wrong in HashtagRepository");
    }

   }


    async destroy(hashtagId){
        try {
            const hashtagSample = await Hashtag.findByIdAndDelete(hashtagId);
            return hashtagSample;
        } catch (error) {
            console.log("Something went wrong in HashtagRepository");
        }

    };

    async getAllByName(hashtagTitleArray){
        try {
            const hashtags = await Hashtag.find({
                title : {$in : hashtagTitleArray}
            });
            return hashtags;
        } catch (error) {
            console.log("Something went wrong in HashtagRepository");
        }
    }

    async bulkcreate(tags){
        try {
            //console.log("inserting hashtags which are not present");
            const response = await Hashtag.insertMany(tags);
            return response;
        } catch (error) {
            console.log("Something went wrong in HashtagRepository");
        }

    }

    async AddTweetIdToAllHashtags(hashtagTitleArray,tweetId){
        try {
            //console.log("Adding tweetId to all the hashtags");
            const response = await Hashtag.updateMany(
            { title: { $in: hashtagTitleArray } },
            { $push: { tweets: tweetId } }
          );
          return response;
        } 
        catch (error) {
            
        }

      return response;
    }

}
export default HashtagRepository;