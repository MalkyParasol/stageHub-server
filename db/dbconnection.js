const mongoose = require('mongoose');
require('dotenv').config()
const connectioString = process.env.CONNECTION_STRING
const connectDB = async () => {
    try {
        
        const connect = await mongoose.connect(connectioString);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports=connectDB;

















