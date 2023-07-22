    import express from 'express';

    import connect from './config/database.js'
    const PORT = 3000;
    import TweetService from './service/tweet-service.js'
    import apiRoutes from './routes/index.js';
    import bodyParser from 'body-parser';


    const app  = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Twitter server started at ${PORT}`);
        await connect();


        // const tweetservice = new TweetService();
        // const response = tweetservice.create({
        //     content : '#GREAT project',
        // });

        console.log("MongoDB connected");

    });
