import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {SALT} from '../config/serverCongif.js';

const userSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }

},{timestamps:true});

userSchema.pre('save' , function(next){
    this.password = bcrypt.hashSync(this.password,SALT);
    next();
});

//lets create the model
const User = await mongoose.model('User',userSchema);
export default User;
