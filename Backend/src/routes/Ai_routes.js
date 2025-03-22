const express=require('express');
const { GetReview } = require('../controllers/Ai');

const router=express.Router();

router.post('/get-review',GetReview)


module.exports=router;