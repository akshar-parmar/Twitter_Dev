import mongoose from 'mongoose';

//lets define schema 
//SCHEMA means structured of document inside mongo db collection
const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'User',
        required : true
    },
    onModel : {
        type : String,
        enum : ['Tweet','Comment'],
        required : true
    },
    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        refPath : 'onModel',
        required : true
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]

}, {
    timestamps:true
});

const Comment = mongoose.model('Comment',commentSchema);
export default Comment;


