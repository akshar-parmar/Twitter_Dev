const express = require('express');
const app  = express();
const connect = require('./config/database');
const PORT = 3000;

const mongoose = require('mongoose');
const tweet = require('./models/tweet');
const Comment = require('./models/comment');
const TweetRepository = require('./repository/tweet-repository');



app.listen(PORT,async()=>{
    console.log(`Twitter server started at ${PORT}`);
    await connect();


    // const response  = await tweet.create({
    //     userContent : "fourth tweet",
    //     userEmail : "abc@gmail.com"
    // });
    // console.log(response);
    
    //find by id
    // const tweets  = await tweet.findById('64b5474ba3b16028ffdea157');
    // tweets.userEmail = 'bhajpa@.com';
    // await tweets.save();
    // console.log(tweets);

    //to fetch all the documents or conditions ones
    //const allDocuments = await tweet.find({});
    //console.log(allDocuments);

    //to delete the document
    //const response = await tweet.deleteMany({userContent : 'fourth tweet'});
    // console.log(response);

    //to update the already present data

    // const response = await tweet.updateOne({userContent : ''},{userContent : 'Jeetega toh modi hi'});
    // console.log(response);


    const tweetRepo = new TweetRepository(); //make an object
    // const response = await tweetRepo.create({
    //     userContent : "sample content 1",
    //     userEmail : "abc@admin.com"
    // });
    // console.log(response);

    // const response  = await tweetRepo.get('64b57ddbfe858d15c073b5ed');
    // console.log(response);


    // const response  = await tweetRepo.update('64b57ddbfe858d15c073b5ed',{userContent : 'new updated content'});
    // console.log(response);
    // const response = await tweetRepo.destroy('64b57dc3064349c06dd18167');
    // console.log(response);

    // const tweetSample = await tweetRepo.create({
    //     userContent : 'tweet with comment',
    //     userEmail : 'admin.com'
    // });
    // console.log("Before adding comments :",tweetSample);
    // tweetSample.comments.push({content : 'first Comment'});
    // await tweetSample.save();
    // console.log("after adding comments :",tweetSample);

    const tweetSample = await tweetRepo.getTweetWithComments('64b677cc2c0dca180af71d30');
    console.log(tweetSample);

    // const commentSample = await Comment.findById('64b677cc2c0dca180af71d32');
    // //console.log(commentSample);
    // tweetSample.comments.push(commentSample);
    // await tweetSample.save();


    console.log("MongoDB connected");

});
