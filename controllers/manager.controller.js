const {Router} = require("express");
const managerService = require("../services/manager.service")
const loggedIn = require("../middlewars/authentication.middleware");
const router = Router();

router.post("/signUp/director/",loggedIn("manager"), async (req, res) => {
    const {email} = req.body
    const result = await managerService.addDirector(email);
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send("director creates successfully");
    else
        res.status(statusCode).send(message);
});


module.exports = router;