const mongoose = require('mongoose');
const Comment = require('./comment');
const Hashtag = require('./hashtags')
//lets define schema 
//SCHEMA means structured of document inside mongo db collection
const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        maxLength : [250,'Tweet cannot be more than 250 characters']
    },

    hashtags : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hashtag'
        }
        //like tweet ->[hashtagId1,hashtagId2,hashtagId3 .....]
    ]

}, { 
    timestamps:true
});


const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;


