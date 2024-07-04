const {Router} = require("express");
const checkAuth = require("../middlewars/authentication.middleware");
const router = Router();
const coachService = require("../services/coach.service")

// V
router.get('/coach/practices/:coachId' , checkAuth("coach"), async(req,res) => {
    const coachId = req.params.coachId;
    const result= await coachService.getAllPractices(coachId);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
})

// V
router.get('/coach/actors/:coachId' , checkAuth("coach"), async(req,res) => {
    const coachId = req.params.coachId;
    const result= await coachService.getAllActors(coachId);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
})

module.exports = router;