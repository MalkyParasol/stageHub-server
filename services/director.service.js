const coachModel = require("../models/coach.model");
const addCoach = async(name,specialization,directorId,phone,email,publicPassword)=>{
    try{
    
        const coach = new coachModel({
            name,
            specialization,
            directorId,
            phone,
            email,
            publicPassword,
            
        })
        return director.save();

    }
    catch(error){
        return { statusCode: 400, message: `fail to save director: ${error.message}` };
    }
}