const {Router} = require("express");
const checkAuth = require("../middlewars/authentication.middleware");
const providerService = require("../services/provider.service");
const router = Router();

router.get("/provider/details/:id",checkAuth("provider"),async (req,res)=>{

    const id = req.params.id;
    const result = await providerService.getDetails(id);
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
   })

   module.exports = router;