const {Router} = require("express");
const managerService = require("../services/manager.service")
const loggedIn = require("../middlewars/authentication.middleware");
const router = Router();
//V
router.post("/signUp/director/",loggedIn("manager"), async (req, res) => {
    const {email} = req.body
    const result = await managerService.addDirector(email);
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send("director creates successfully");
    else
        res.status(statusCode).send(message);
});
//V
router.get("/hello",loggedIn("manager"),(req,res)=>{
 res.status(200).send("hello manager");
})



module.exports = router;