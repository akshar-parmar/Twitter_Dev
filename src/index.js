const express = require('express');
const app  = express();
const connect = require('./config/database');
const PORT = 3000;
const TweetService = require('./service/tweet-service');
const Hashtag = require('./models/hashtags');
const mongoose = require('mongoose');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment');
const {TweetRepository,HashtagRepository} = require('./repository/index');



app.listen(PORT,async()=>{
    console.log(`Twitter server started at ${PORT}`);
    await connect();


    const tweetservice = new TweetService();
    const response = tweetservice.create({
        content : '#uniform #acceleration #bjp #first aayegi',
    });

    console.log("MongoDB connected");

});
