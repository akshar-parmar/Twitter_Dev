    import express from 'express';

    import connect from './config/database.js'
    const PORT = 3000;
    import TweetService from './service/tweet-service.js'
    import apiRoutes from './routes/index.js';
    import bodyParser from 'body-parser';
    import UserRepository from './repository/user-repository.js';
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
        //     email : "akshar@gmail.com",
        //     password : "1234",
        //     name : "hinduBoy"
        // });
        // console.log(response);

        // const repo = new LikeService();
        // const response = await repo.toggleLike('Tweet','64c2befdd91e5eb54a383a1f','64c2c163c14a6458214efb15');
        // console.log(response);
        // const repo = new TweetService();
        // const response = await repo.create({content : 'this is new tweet without hashtag'});


        console.log("MongoDB connected");

    });
