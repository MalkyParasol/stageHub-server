
const {Router} = require("express");
const checkAuth = require("../middlewars/authentication.middleware");
const router = Router();
const actorService = require("../services/actor.service")
//V
router.get('/actor/practices/:actorId' , checkAuth("actor"), async(req,res) => {
    const actorId = req.params.actorId;
    const result= await actorService.getAllPractices(actorId);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
})

router.get("/actor/details/:id",checkAuth("actor"),async (req,res)=>{
    const id = req.params.id;
    const result = await actorService.getDetails(id)
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
});

module.exports=router


