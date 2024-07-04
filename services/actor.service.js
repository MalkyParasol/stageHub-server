const bcrypt = require("bcrypt");
const practiceModel = require("../models/practice.model");

const getAllPractices = async(actorId) =>{
    try{
        return practiceModel.find({ actorsId: { $in: [actorId] } });
    }
    catch(error){
        return { statusCode: 400, message: `fail to get practices: ${error.message}` };
    }
}



module.exports={
    getAllPractices
}