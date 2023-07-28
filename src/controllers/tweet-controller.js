import TweetService  from "../service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet= async(req,res)=>{
    try {
        
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data : response,
            message : "Successfully created the tweet",
            success : true

        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false
        })
        
    }
}