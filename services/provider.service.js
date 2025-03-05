const providerModel = require("../models/provider.model");
const mongoose = require('mongoose');
const { Types } = mongoose;


const getDetails = async (id) =>{
    try{
        const {name, phone, product, price, email} = await providerModel.findById( new mongoose.Types.ObjectId(id), 'name phone product price email');
        return { statusCode: 200, message: {name, phone, product, price,email} }
    }
    catch(error){
        return { statusCode: 400, message: `Failed to get provider details: ${error.message}` };
    }
}

module.exports={
    getDetails
}