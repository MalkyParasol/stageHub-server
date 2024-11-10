const bcrypt = require("bcrypt");
const condidateModel = require("../models/candidate.model");
const directorModel = require("../models/director.model");
const managerModel = require("../models/manager.model");
const mongoose = require('mongoose');
const { Types } = mongoose;

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


const getDetails = async (id) =>{
    try{
        const {name, phone} = await managerModel.findById( new mongoose.Types.ObjectId(id), 'name phone');
        return { statusCode: 200, message: {name, phone} }
    }
    catch(error){
        return { statusCode: 400, message: `Failed to get manager details: ${error.message}` };
    }
}
module.exports={
    addDirector,
    getDetails
}