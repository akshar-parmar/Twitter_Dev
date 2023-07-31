import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {SALT} from '../config/serverCongif.js';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique : true

    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true,
        unique : true
    }

},{timestamps:true});

userSchema.pre('save' , function(next){
    this.password = bcrypt.hashSync(this.password,SALT);
    next();
});

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.genJWT = function generate(){
    return jwt.sign({id : this.id, email : this.email}, 'twitter_secret',{expiresIn: '1h'})
};

//lets create the model
const User = await mongoose.model('User',userSchema);
export default User;
