const mongoose = require('mongoose');
const Comment = require('./comment');
//lets define schema 
//SCHEMA means structured of document inside mongo db collection
const tweetSchema = new mongoose.Schema({
    userContent : {
        type : String,
        required : true
    },
    userEmail : {
        type : String
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

const tweet = mongoose.model('tweet',tweetSchema);
module.exports = tweet;


