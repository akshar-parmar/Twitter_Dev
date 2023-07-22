import mongoose from 'mongoose';
//create hashtag schema
//one hastag can be used in multiple tweets
//one tweet can have multiple hastag

const hashtagSchema = new mongoose.Schema({

    //hashtag will have title like #AI, #technology
    title : {
        type : String,
        required : true,
        unique : true,
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

//hook for converting capital letter title of hastag to lower before saving it 
hashtagSchema.pre('save',function(next){
    this.title = this.title.toLowerCase();
    next();
});

//make model
const Hashtag = mongoose.model('Hashtag',hashtagSchema);


export default Hashtag;