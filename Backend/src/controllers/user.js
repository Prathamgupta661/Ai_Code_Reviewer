const UserModel = require("../models/User");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const handleRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        email=email.toLowerCase();
        const user= await UserModel.findOne({email});
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists. Please login.",
            });
        }
        const hashpass=await bcrypt.hash(password,10);
        const reguser= await UserModel.create({ name, email, password:hashpass });
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: reguser,
        });
            
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again.",
            error: error.message
        });
    }
    
}

const handleLogin = async (req, res) => {
    try {
        const {email, password}=req.body;
        email=email.toLowerCase();
        const user= await UserModel.findOne({email});
        if(!user){
           return res.status(403).send("User email or password is incorrect");
        }
        const validPassword=await bcrypt.compare(password,user.password);
        if(!validPassword){
            return res.status(403).send("User email or password is incorrect");
        }
        const jwttoken=jwt.sign({email:user.email,name:user.name,id:user._id},process.env.JWT_SECRET,{expiresIn:'12h'});
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: jwttoken,
            email,
            name:user.name,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again.",
            error: error.message
        });
    }
}

module.exports={
    handleRegister,
    handleLogin
}