const express=require('express');
const { handleLogin, handleRegister } = require('../controllers/user');
const router=express.Router();

router.post('/login',handleLogin)

router.post('/signin',handleRegister)

module.exports=router;