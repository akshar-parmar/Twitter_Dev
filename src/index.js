import express from 'express';

import connect from './config/database.js'
const PORT = 3000;
import TweetService from './service/tweet-service.js'



const app  = express();
app.listen(PORT,async()=>{
    console.log(`Twitter server started at ${PORT}`);
    await connect();


    const tweetservice = new TweetService();
    const response = tweetservice.create({
        content : '#CAPITAL #CAPITAL is working',
    });

    console.log("MongoDB connected");

});
