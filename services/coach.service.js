const bcrypt = require("bcrypt");
const practiceModel = require("../models/practice.model");
const actorModel = require("../models/actor.model");

const getAllPractices = async(coachId) =>{
    try{
        return practiceModel.find({coachId:coachId});
    }
    catch(error){
        return { statusCode: 400, message: `fail to get practices: ${error.message}` };
    }
}

const getAllActors = async(coachId) =>{
    try{
        return actorModel.find({coachId:coachId});
    }
    catch(error){
        return { statusCode: 400, message: `fail to get actors: ${error.message}` };
    }
}

module.exports={
    getAllPractices,
    getAllActors
}