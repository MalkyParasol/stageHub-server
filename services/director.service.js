 const actorModel = require("../models/actor.model");
const coachModel = require("../models/coach.model");
const bcrypt = require("bcrypt");
const addCoach = async(name,specialization,directorId,phone,email,password)=>{
   
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
    
        const coach = new coachModel({
            name,
            specialization,
            directorId,
            phone,
            email,
            password:hashPassword,
            
        })
        return coach.save();

    }
    catch(error){
        return { statusCode: 400, message: `fail to add coach: ${error.message}` };
    }
 }

 
 const addActor = async(name,role,coachId,directorId,phone,email,password)=>{

    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
    
        const actor = new actorModel({
            name,
            role,
            coachId,
            directorId,
            phone,
            email,
            password:hashPassword,
            
        })
        return actor.save();

    }
    catch(error){
        return { statusCode: 400, message: `fail to add actor: ${error.message}` };
    }
 }

module.exports={
    addCoach,
    addActor
}