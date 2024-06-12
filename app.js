const express = require("express");
require('dotenv').config()
const port = process.env.PORT
const app = express();
const connectDB = require("./db/dbconnection")
connectDB()
const userController = require("./controllers/user.controller")
const bodyParser = require("body-parser");
///////////////

const bcrypt = require("bcrypt");
const ManagerModel = require("./models/manager.model");

const addManager = async()=>{
    
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash("123456", salt);
    
    const firstManager = new ManagerModel({
        name:"Malky Parasol",
        phone:"0548545885",
        email:"Malky5885@gmail.com",
        password:hashPassword
    })
    return firstManager.save();
}

// addManager();
/////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userController);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
