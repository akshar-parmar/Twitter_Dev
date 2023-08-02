import TweetService  from "../service/tweet-service.js";
import { multerUploads,getDataUri } from "../middlewares/multer.js";
import { cloudinary } from '../config/cloudinaryConfig.js'
const tweetService = new TweetService();

export const createTweet= async(req,res)=>{
    try {
        console.log(req.user.id);
        const dataUriResponse = getDataUri(req.file.buffer);
        const uploadOptions = {
            folder: 'TwitterImages', // Specify the folder where you want the image to be uploaded
            
        };
        const mycloud = await cloudinary.uploader.upload(dataUriResponse.content,uploadOptions);
        const payload = {
            content : req.body.content,
            image : mycloud.secure_url,
            userId  : req.user.id
        }
        const response = await tweetService.create(payload);
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

export const getTweet = async(req,res)=>{
    try {
        const response = await tweetService.getTweet(req.params.id);
        return res.status(201).json({
            data : response,
            message : "Successfully fetched the tweet",
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