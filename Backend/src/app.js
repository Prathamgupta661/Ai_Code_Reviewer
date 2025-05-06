require('dotenv').config();
const express=require('express');
const app=express();
const AiRoutes=require('./routes/Ai_routes');
const UserRoutes=require('./routes/User');
const cors=require('cors');
const connectDB = require('./connectdb');
const Authrouter=require('./routes/GoogleAuth')

connectDB();
app.use(cors());
app.use(express.json());


const url='https://ai-code-reviewer-backend-iotl.onrender.com';
const time=30000;

function keepAlive() {
    fetch(url).then(()=>console.log("Reloded")).catch((err)=>console.log("Some error occured : ",err))
};

setInterval(keepAlive,time);

app.use('/ai',AiRoutes);
app.use('/user',UserRoutes)

app.use('/auth',Authrouter);

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

module.exports=app;