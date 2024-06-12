const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const actorModel = require("../models/actor.model");
const managerModel = require("../models/manager.model");
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

const connectManager = async(email,password,callback)=>{
    try{
        const manager = await managerModel.findOne({email: email})
        const validPassword = await bcrypt.compare(password,manager.password);
        if(validPassword)
        {
            const token = jwt.sign({name:manager.name, phone:manager.phone, email , password: manager.password }, process.env.TOKEN_SECRET);
            callback({statusCode:200,id:String(manager._id),token})
        }
        else{
            callback({statusCode:404,message:"manager not found"});
        }

   }
   catch(error)
   {
    callback({statusCode:400,message:error.message})
   }
}



module.exports = {
    connectManager
};