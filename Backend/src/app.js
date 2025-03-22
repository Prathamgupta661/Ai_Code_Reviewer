require('dotenv').config();
const express=require('express');
const app=express();
const AiRoutes=require('./routes/Ai_routes');
const UserRoutes=require('./routes/User');
const cors=require('cors');
const connectDB = require('./connectdb');

connectDB();
app.use(cors());
app.use(express.json());

app.use('/ai',AiRoutes);
app.use('/user',UserRoutes)
app.get('/',(req,res)=>{
    res.send('Hello World!');
})

module.exports=app;