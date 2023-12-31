import {TweetRepository,HashtagRepository} from '../repository/index.js'


class TweetService{
    constructor(){
        this.tweetrepository = new TweetRepository();
        this.hashtagrepository = new HashtagRepository();
    }

    async create(data){

        //let's create the tweet 
        const tweet = await this.tweetrepository.create(data);

        //we need to fetch all the hashtags from content of the tweet
        const content = data.content;
        const regex = /#\w+/g;
        const hashtagsFetchedFromContent = content.match(regex);
        // console.log(hashtagsFetchedFromContent);

        //map doesnot work with null (hashtagsFetchedFromContent is null then issue hoga) so i need to use ternary operator
        //Array.isArray(arr)  ->if arr is array then it will return true
        //Array.isArray(null) ->false 
        const fetchedHashtag = Array.isArray(hashtagsFetchedFromContent) ?
        hashtagsFetchedFromContent.map((tags)=> tags.substring(1).toLowerCase()) : [];

        const hashtagTitleArray = [...new Set(fetchedHashtag)]; //to avoid duplicate #hashtag if present
        //console.log(hashtagTitleArray);

        //console.log("tweet created in collection Tweet",tweet);
        const tweetId = tweet.id;


        //filter title of hashtags based on multiple tags
        const hashtagPresentInDBObject = await this.hashtagrepository.getAllByName(hashtagTitleArray);
        //console.log("already present title are ",hashtagPresentInDBObject);

        let titlePresentInDb = [];

        hashtagPresentInDBObject.forEach((obj)=>{
            titlePresentInDb.push(obj.title);
        });

        //bulkInsert of title which are not present
       const response = await this.bulkInsertHashtags(titlePresentInDb,hashtagTitleArray);
       //console.log(response);


        //how to add tweetID inside all hashtags
       const addedId =   await this.hashtagrepository.AddTweetIdToAllHashtags(hashtagTitleArray,tweetId);
       //console.log(addedId);

       //now we need to add all the hashtagid in that tweet as well
       const AddedHashtagId = await this.addAllHashtagIdToTweet(tweetId,hashtagTitleArray);
       return AddedHashtagId;
       

    }



    async bulkInsertHashtags(titlePresentInDb,hashtagTitleArray){
        let tags = [];
        hashtagTitleArray.forEach((str)=>{
            const isPresent = titlePresentInDb.includes(str);

            if(!isPresent){
                //if it is not present in db then we need to create the hashtag
                tags.push({title : str});
    
            }
        });
        const response = await this.hashtagrepository.bulkcreate(tags);
        return response;
    }




    async addAllHashtagIdToTweet(tweetId,hashtagTitleArray){
        const HashtagObjects = await this.hashtagrepository.getAllByName(hashtagTitleArray);

        const allHashtagIds = [];
        HashtagObjects.forEach((obj)=>{
            allHashtagIds.push(obj.id);
        });

        const response = await this.tweetrepository.addHashtagIds(tweetId,allHashtagIds);
        return response;
    }

    async getTweet(tweetId){
        try {
            const response = await this.tweetrepository.getTweetWithComments(tweetId);
            return response;
        } catch (error) {
            console.log("something went wrong in the tweet service");
        }
    }


    

}
export default TweetService;
