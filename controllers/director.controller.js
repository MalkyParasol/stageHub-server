const {Router} = require("express");
const directorService = require("../services/director.service")
const loggedIn = require("../middlewars/authentication.middleware");
const router = Router();
//V
router.post("/signUp/coach/",loggedIn("director"), async (req, res) => {
    const {name,specialization,directorId,phone,email,password} = req.body
    const result = await directorService.addCoach(name,specialization,directorId,phone,email,password);
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send("coach created successfully");
    else
        res.status(statusCode).send(message);
});
//V
router.post("/signUp/actor",loggedIn("director"),async(req,res)=>{
    const {name,role,coachId,directorId,phone,email,password} = req.body;
    const result = await directorService.addActor(name,role,coachId,directorId,phone,email,password);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send("actor created successfully");
    else
        res.status(statusCode).send(message);
})


module.exports = router;