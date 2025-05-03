const {OAuth2Client} =require('google-auth-library')
const AuthModel=require('../models/GoogleAuth')
const jwt=require('jsonwebtoken')

const Gauth=async(req,res)=>{
    const {token}=req.body;
    const client=new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    try {
        const ticket=await client.verifyIdToken({
            idToken:token,
            audience:process.env.GOOGLE_CLIENT_ID
        });
        const {name,email,picture,sub:googleid}=ticket.getPayload();
        const existingUser=await AuthModel.findOne({googleid});
        if(existingUser){
            const apptoken=jwt.sign({id:existingUser._id,name:existingUser.name},process.env.JWT_SECRET,{expiresIn:'1d'});
            return res.status(200).json({apptoken,name:existingUser.name});
        }
        const newuser=await AuthModel.create({name,email,googleid,picture});
        const apptoken=jwt.sign({id:newuser._id,name:newuser.name},process.env.JWT_SECRET,{expiresIn:'1d'});
        return res.status(200).json({apptoken,name:newuser.name});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:'Internal server error'});
    }

}

module.exports=Gauth;