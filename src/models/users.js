import mongoose from 'mongoose';

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

//lets create the model
const User = await mongoose.model('User',userSchema);
export default User;
