const {Router} = require("express");
const managerService = require("../services/manager.service")
const checkAuth = require("../middlewars/authentication.middleware");
const router = Router();
//V
router.post("/signUp/director/",checkAuth("manager"), async (req, res) => {
    const {email} = req.body
    const result = await managerService.addDirector(email);
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send("director creates successfully");
    else
        res.status(statusCode).send(message);
});
//V
router.get("/manager/details/:id",checkAuth("manager"),async (req,res)=>{
    const id = req.params.id;
    const result = await managerService.getDetails(id)
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
});



module.exports = router;