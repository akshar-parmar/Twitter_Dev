import { CommentRepository,TweetRepository } from "../repository/index.js";
class CommentService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }

    async createComment(contentOfComment, userId, modelType, modelId){
        if(modelType == 'Tweet'){
            var commentable = await this.tweetRepository.get(modelId);
        }
        else if(modelType == 'Comment'){
            var commentable = await this.commentRepository.get(modelId);
        }
        else{
            throw new Error("unknown model type");
        }

        console.log("Commentable object",commentable);

        const newComment = await this.commentRepository.create({
            content : contentOfComment,
            user : userId,
            onModel : modelType,
            commentable : modelId,
            comments : [],
        });
        console.log("comment created",newComment);
        commentable.comments.push(newComment.id);
        await commentable.save();

        console.log("Commentable object after update",commentable);

        return newComment;

    }

    

};

export default CommentService;