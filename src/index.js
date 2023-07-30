    import express from 'express';
    import {PORT} from './config/serverCongif.js';
    import connect from './config/database.js'

    import TweetService from './service/tweet-service.js'
    import apiRoutes from './routes/index.js';
    import bodyParser from 'body-parser';
    import {UserRepository} from './repository/index.js';
    import User from './models/users.js';
    import LikeService from './service/like-service.js';


    const app  = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Twitter server started at ${PORT}`);
        await connect();


        // const userRepo = new UserRepository(User);
        // const response = await userRepo.create({
        //     email : "keyur@gmail.com",
        //     password : "shreypatel",
        //     name : "shreySP"
        // });
        // console.log(response);

        // const repo = new LikeService();
        // const response = await repo.toggleLike('Tweet','64c2befdd91e5eb54a383a1f','64c2c163c14a6458214efb15');
        // console.log(response);
        // const repo = new TweetService();
        // const response = await repo.create({content : 'this is new tweet without hashtag'});
        // const repo = new TweetService();
        // const response = await repo.getTweet('64c4bd45ab3b45858016e9d0');
        // console.log(response);



        console.log("MongoDB connected");

    });
