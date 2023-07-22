const mongoose = require('mongoose');

//create hashtag schema
//one hastag can be used in multiple tweets
//one tweet can have multiple hastag

const hastagSchema = new mongoose.Schema({

    //hashtag will have title like #AI, #technology
    title : {
        type : String,
        required : true,
        index : true
    },

    tweets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet'
        }

        //like #technology ->[tweetId1,tweetId2,tweetId3 .....]
    ]


},{timestamps:true});

//make model
const Hashtag = mongoose.model('Hashtag',hastagSchema);
module.exports = Hashtag;