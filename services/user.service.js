const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const actorModel = require("../models/actor.model");
const managerModel = require("../models/manager.model");
const condidateModel = require("../models/candidate.model");
const directorModel = require("../models/director.model");
// const connectActor = async(email,password,callback)=>{
//    try{

//         const actor = await actorModel.findOne({email: email})
//         const validPassword = await bcrypt.compare(password,actor.password);
//         if(validPassword)
//         {
//             const token = jwt.sign({name: user.userName, email: user.email, password: user.password , policy: user.policy}, TOKEN_SECRET);
//             callback({statusCode:200,data:String(actor._id),token})
//         }
//         else{
//             callback({statusCode:404,message:"actor not found"});
//         }

//    }
//    catch(error)
//    {
//     callback({statusCode:400,message:error.message})
//    }
// }

// const connectManager = async(email,password,callback)=>{
//     try{
//         const manager = await managerModel.findOne({email: email})
//         const validPassword = await bcrypt.compare(password,manager.password);
//         if(validPassword)
//         {
//             const token = jwt.sign({name:manager.name, phone:manager.phone, email , password: manager.password }, process.env.TOKEN_SECRET);
//             callback({statusCode:200,data:String(manager._id),token})
//         }
//         else{
//             callback({statusCode:404,message:"manager not found"});
//         }

//    }
//    catch(error)
//    {
//     callback({statusCode:400,message:`something get wrong while trying to conennect the manager: ${error.message}`})
//    }
// }

const connectManager = async (email, password) => {
    try {
        const manager = await managerModel.findOne({ email: email });

        if (!manager) {
            return { statusCode: 404, message: "manager not found" };
        }

        const validPassword = await bcrypt.compare(password, manager.password);

        if (validPassword) {
            const token = jwt.sign({ name: manager.name, phone: manager.phone, email, password: manager.password,role:'manager' }, process.env.TOKEN_SECRET);
            return { statusCode: 200, id: String(manager._id), token };
        } else {
            return { statusCode: 401, message: "Invalid password" };
        }
    } catch (error) {
        return { statusCode: 400, message: `Something went wrong while trying to connect the manager: ${error.message}` };
    }
};

const connectDirector = async (email, password) => {
    try {
        const director = await directorModel.findOne({ email: email });

        if (!director) {
            return { statusCode: 404, message: "director not found" };
        }

        const validPassword = await bcrypt.compare(password, director.password);

        if (validPassword) {
            const token = jwt.sign({ name: director.name, phone: director.phone, email, password: director.password }, process.env.TOKEN_SECRET);
            return { statusCode: 200, id: String(director._id), token };
        } else {
            return { statusCode: 401, message: "Invalid password" };
        }
    } catch (error) {
        return { statusCode: 400, message: `Something went wrong while trying to connect the director: ${error.message}` };
    }
};

const addCondidate = async ( name, phone, email, password, publicPassword)=>{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    
    const condidate = new condidateModel({
        name,
        phone,
        email,
        password:hashPassword,
        publicPassword
    })
    return condidate.save();
}

module.exports = {
    connectManager,
    connectDirector,
    addCondidate
};