const Gauth = require("../controllers/GAuth");
const router= require("express").Router();


router.post('/google',Gauth)

module.exports=router;