const generateContent = require("../services/Aiconfig");

const GetReview=async (req,res) => {
    const code=req.body.code;
    if(!code){
        return res.status(400).send('Please provide code');
    }
    try {
        const review=await generateContent(code);
        return res.send(review);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
    
}


module.exports={GetReview};