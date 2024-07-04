//express
const express = require("express") 

//swagger
const swaggerSetup = require('./swagger');

//.env
require('dotenv').config()
const port = process.env.PORT

//cors
const cors = require('cors');

//app
const app = express();

swaggerSetup(app);
//db
const connectDB = require("./db/dbconnection")
connectDB()

//controllers
const userController = require("./controllers/user.controller")
const managerController = require("./controllers/manager.controller")
const directorController = require("./controllers/director.controller")

const bodyParser = require("body-parser");


///////////////

// const bcrypt = require("bcrypt");
// const ManagerModel = require("./models/manager.model");

// const addManager = async()=>{
    
    
//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash("123456", salt);
    
//     const firstManager = new ManagerModel({
//         name:"Malky Parasol",
//         phone:"0548545885",
//         email:"Malky5885@gmail.com",
//         password:hashPassword
//     })
//     return firstManager.save();
// }

  
  

// addManager();
/////////////////

// const options = {
//     swaggerDefinition: {
//       openapi: '3.0.0',
//       info: {
//         title: 'Your API Title',
//         version: '1.0.0',
//         description: 'API documentation using Swagger',
//       },
//       servers: [
//         {
//           url: 'http://localhost:3001', // Replace with your server URL
//         },
//       ],
//     },
//     apis: ['./controllers/*.js'], // Path to the API routes folder
//   };
//   const specs = swaggerJsdoc(options);
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(userController);
app.use(managerController);
app.use(directorController);
// const middlewares = [authentication];
// app.use(middlewares);


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
