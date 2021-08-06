const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const mentorSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true, minLength: 6},
},{
    timestamps: true 
})

mentorSchema.pre("save", function(next){
    if(!this.isModified("password")){
        return next();
    }

    bcrypt.hash(this.password, 2, (err, hash)=>{
        if(err){
            return next(err);
        }
        this.password = hash;
        next();
    })
})

mentorSchema.methods.chcekPass = function(password){
    const passwordHash = this.password;
    return new Promise((resolve, reject)=>{
        bcrypt.compare(password, passwordHash,(err, same)=>{
            if(err){
                return reject(err);
            }
            resolve(same);
        })
    })
}

const Mentor = mongoose.model("mentor", mentorSchema);
module.exports = Mentor;