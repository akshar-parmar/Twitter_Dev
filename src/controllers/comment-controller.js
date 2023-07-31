import CommentService from "../service/comment-service.js";
const commentService = new CommentService();

export const createComment = async(req,res)=>{
    try {
        console.log("what is the value",req.user.id);
        const response = await commentService.createComment(
            req.body.content,
            req.user.id,
            req.query.modelType,
            req.query.modelId
            );

        return res.status(201).json({
                data : response,
                success : true,
                message : "Successfully created the comment"
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false
        });
    }
}

