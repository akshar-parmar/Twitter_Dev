    import express from 'express';
    import {PORT} from './config/serverCongif.js';
    import connect from './config/database.js'

    import apiRoutes from './routes/index.js';
    import bodyParser from 'body-parser';

    import passport from 'passport';
    import {passportAuth} from './config/jwt-middleware.js';


    const app  = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(passport.initialize());
    passportAuth(passport);
    app.use('/api', apiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Twitter server started at ${PORT}`);
        await connect();

        console.log("MongoDB connected");

    });
