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
tweetSchema.virtual('commentWithMail').get(function(){
    return `${this.userContent} created by ${this.userEmail}`;
});

//hooks
tweetSchema.pre('save',function(next){
    this.userContent = this.userContent + '....';
    next();
});

const tweet = mongoose.model('tweet',tweetSchema);
module.exports = tweet;


