const mongoose = require('mongoose');

//lets define schema 
//SCHEMA means structured of document inside mongo db collection
const commentSchema = new mongoose.Schema({
    userContent : {
        type : String,
        required : true
    },
    userEmail : {
        type : String
    }

}, {
    timestamps:true
});

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;


