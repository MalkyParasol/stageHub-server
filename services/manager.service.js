const bcrypt = require("bcrypt");
const condidateModel = require("../models/candidate.model");
const directorModel = require("../models/director.model");


//V
const addDirector = async(email)=>{
    try{
        const condidate = await condidateModel.findOne({email:email});
        if(!condidate)
            return { statusCode: 404, message: "Condidate not found" };
        const director = new directorModel({
            name:condidate.name,
            phone:condidate.phone,
            email:condidate.email,
            password:condidate.password,
            publicPassword:condidate.publicPassword
        })
        await condidateModel.findOneAndDelete({email:email});
        return director.save();

    }
    catch(error){
        return { statusCode: 400, message: `fail to save director: ${error.message}` };
    }
}

module.exports={
    addDirector
}