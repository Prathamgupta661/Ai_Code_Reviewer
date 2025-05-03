const mongoose = require('mongoose');

const newschema= new mongoose.Schema({
    
    name:String,
    email:String,
    googleid:String,
    picture:String,
},{timestamps:true});

const AuthModel= mongoose.model('Google_auth',newschema);

module.exports=AuthModel;    