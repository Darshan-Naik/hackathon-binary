const Mentor = require('../Model/mentor.model');

const signUp = async (req, res) => {
    const exist = await Mentor.find({"email": req.body.email}).lean().exec();
    //console.log(exist.length);
    if(exist.length!=0){
        return res.status(401).json({message: "Account are already there"});
    }

    const mentorDetails = await Mentor.create(req.body);
    return res.status(200).send(mentorDetails);
}

const logIn = async (req, res) => {

    try{
        const exist = await Mentor.find({email: req.body.email}).exec();

        if(exist.length==0){
            return res.status(401).json({message: "Please check your email and password"});
        }

        //console.log(exist, exist[0].password==req.body.password)
        
        if(exist[0].password==req.body.password){
            
            return res.status(202).json({data: exist});
        } else {
            return res.status(401).json({message: "Please check your email and password"});
        }

    } catch(e) {
        return res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    signUp,
    logIn
};