const User = require('../models/user.models'); 
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv').config()
const signupController= async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ msg: "User already exists, please login", success: false });
        }
       const userModel=new User({username,email,password});
       const salt = await bcrypt.genSalt(10);
       userModel.password = await bcrypt.hash(password, salt);
       await userModel.save();
       res.status(201).json({
        msg:"signup successfully",
        success:true
       })
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "An internal server error occurred", success: false });
    }
};
const loginController= async (req, res) => {
    try {
        const {  email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ msg: "User not exist please signup first", success: false });
        }
       const isPassequal=await bcrypt.compare(password,user.password);
       if(!isPassequal){
        return res.json({ msg: "Invalid password", success: false });
       }
       const jwtToken=jwt.sign(
        {email:user.email,_id:user._id},
        process.env.JWT_SECRET,{
            expiresIn:"24h"
        }
        
    )
    const userName=user.username;
     res.status(201).json({
        msg:"login successfully",
        success:true,
        jwtToken,
        userName
       })
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "An internal server error occurred", success: false });
    }
};
module.exports = { signupController , loginController};