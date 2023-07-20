const express = require('express');
const app  = express();
const connect = require('./config/database');
const PORT = 3000;

const mongoose = require('mongoose');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository');



app.listen(PORT,async()=>{
    console.log(`Twitter server started at ${PORT}`);
    await connect();
    const tweetSample = await Tweet.create({
        content : 'Twitter handles '
    });
    console.log(tweetSample);
    console.log("MongoDB connected");

});
