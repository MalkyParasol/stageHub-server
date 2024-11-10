 const actorModel = require("../models/actor.model");
const coachModel = require("../models/coach.model");
const bcrypt = require("bcrypt");
const providerModel = require("../models/provider.model");
const practiceModel = require("../models/practice.model");
const showModel = require("../models/show.model");
const mongoose = require('mongoose');
const directorModel = require("../models/director.model");
const { Types } = mongoose;

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

 const addProvider = async(name,phone,email,product,price,password)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
    
        const provider = new providerModel({
            name,
            phone,
            email,
            product,
            price,
            password:hashPassword
            
        })
        return provider.save();

    }
    catch(error){
        return { statusCode: 400, message: `fail to add provider: ${error.message}` };
    }
 }

//  practices
const addPractice = async(date,directorId,coachId,actorsId)=>{
    try{
        const practice = new practiceModel({
            date,
            directorId,
            coachId,
            actorsId
        })
        return practice.save();
    }
    catch(error){
        return { statusCode: 400, message: `fail to add practice: ${error.message}` };
    }
 }

 const updatePractice = async(practiceId,date,directorId,coachId,actorsId)=>{
    try{
        const practiceIdObj = new Types.ObjectId(practiceId);
        const newPractice = await practiceModel.findOneAndUpdate(
            { _id: practiceIdObj },
            {date:date,
            directorId:directorId,
            coachId:coachId,
            actorsId:actorsId},
            { new: true }
        );
        return newPractice
    }
    catch(error){
        return { statusCode: 400, message: `fail to update practice: ${error.message}` };
    }
      
 }

const getAllPractices = async()=>{
    try{
        return practiceModel.find();
    }
    catch(error){
        return { statusCode: 400, message: `fail to get practices: ${error.message}` };
    }
}
// V
const addShow = async(name,date,location,price,numAvailableTickets,directorId)=>{
    try{
        const show = new showModel({
            name,
            date,
            location,
            price,
            numAvailableTickets,
            directorId
        })
        return show.save();
    }
    catch(error){
        return { statusCode: 400, message: `fail to add show: ${error.message}` };
    }
 }

 const getAllProviders = async()=>{
    try{
        return providerModel.find();
    }
    catch(error){
        return { statusCode: 400, message: `fail to get providers: ${error.message}` };
    }
}

const getAllActors = async()=>{
    try{
        return actorModel.find();
    }
    catch(error){
        return { statusCode: 400, message: `fail to get actors: ${error.message}` };
    }
}

const getAllCoaches = async()=>{
    try{
        return coachModel.find();
    }
    catch(error){
        return { statusCode: 400, message: `fail to get choaches: ${error.message}` };
    }
}

const getDetails = async (id) =>{
    try{
        const {name, phone} = await directorModel.findById( new mongoose.Types.ObjectId(id), 'name phone');
        return { statusCode: 200, message: {name, phone} }
    }
    catch(error){
        return { statusCode: 400, message: `Failed to get director details: ${error.message}` };
    }
}

module.exports={
    addCoach,
    addActor,
    addProvider,
    addPractice,
    getAllPractices,
    addShow,
    getAllProviders,
    getAllActors,
    getAllCoaches,
    updatePractice,
    getDetails
}