import LikeService from '../service/like-service.js';
const likeservice = new LikeService();



export const toggleLike = async(req,res)=>{
    try {

        const response = await likeservice.toggleLike(req.query.modelType, req.query.modelId, req.user.id);
        return res.status(201).json({
            data :response,
            success : true,
            message : 'successfully able to toggle the like'

        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "something went wrong in like toggle service",
            data : {},
            success : false

        });
    }
}