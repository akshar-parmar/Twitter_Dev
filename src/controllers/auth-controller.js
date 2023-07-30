import UserService from "../service/user-service.js";

const userService = new UserService();

export const create = async(req,res)=>{
    try {
        const response = await userService.signup({
            email:req.body.email,
            password: req.body.password,
            name : req.body.name

        });
        return res.status(201).json({
            success:true,
            message:"Successfullly created a new user",
            data: response,
            err:{}
        })
    } catch (error) {
        //console.log(error);
        return res.status(500).json({
            message:"something went wrong while signup",
            data:{},
            success:false,
            err:error
        });
    }
}