const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const actorModel = require("../models/actor.model");
const managerModel = require("../models/manager.model");
const condidateModel = require("../models/candidate.model");
const directorModel = require("../models/director.model");


const connectUser = async (model, role, email, password) => {
    try {
        const user = await model.findOne({ email });

        if (!user) {
            return { statusCode: 404, message: `${role} not found` };
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (validPassword) {
            const token = jwt.sign({ 
                name: user.name,
                phone: user.phone,
                email,
                password: user.password,
                role
            }, process.env.TOKEN_SECRET);
            return { statusCode: 200, id: String(user._id), token };
        } else {
            return { statusCode: 401, message: "Invalid password" };
        }
    } catch (error) {
        return { statusCode: 400, message: `Something went wrong while trying to connect the ${role}: ${error.message}` };
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
    addCondidate,
    connectUser
};