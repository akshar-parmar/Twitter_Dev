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
        console.log("Something went wrong in HashtagRepository 1");
    }

   };

   async get(hashtagId){
    try {
        const hashtagSample = await Hashtag.findById(hashtagId).populate('tweets');
        return hashtagSample;
    } catch (error) {
        console.log("Something went wrong in HashtagRepository 2");
    }

   }


    async destroy(hashtagId){
        try {
            const hashtagSample = await Hashtag.findByIdAndDelete(hashtagId);
            return hashtagSample;
        } catch (error) {
            console.log("Something went wrong in HashtagRepository 3");
        }

    };

    async getAllByName(hashtagTitleArray){
        try {
            const hashtags = await Hashtag.find({
                title : {$in : hashtagTitleArray}
            });
            return hashtags;
        } catch (error) {
            console.log("Something went wrong in HashtagRepository 4");
        }
    }

    async bulkcreate(tags){
        try {
            //console.log("inserting hashtags which are not present");
            const response = await Hashtag.insertMany(tags);
            return response;
        } catch (error) {
            console.log("Something went wrong in HashtagRepository 5");
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