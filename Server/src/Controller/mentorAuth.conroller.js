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

module.exports = signUp;