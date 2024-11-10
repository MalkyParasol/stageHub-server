const providerModel = require("../models/provider.model");
const mongoose = require('mongoose');
const { Types } = mongoose;


const getDetails = async (id) =>{
    try{
        const {name, phone, product, price} = await providerModel.findById( new mongoose.Types.ObjectId(id), 'name phone product price');
        return { statusCode: 200, message: {name, phone, product, price} }
    }
    catch(error){
        return { statusCode: 400, message: `Failed to get provider details: ${error.message}` };
    }
}

module.exports={
    getDetails
}