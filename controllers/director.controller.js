const {Router} = require("express");
const directorService = require("../services/director.service")
const checkAuth = require("../middlewars/authentication.middleware");
const router = Router();
//V
router.post("/director/signUp/coach/",checkAuth("director"), async (req, res) => {
    const {name,specialization,directorId,phone,email,password} = req.body
    const result = await directorService.addCoach(name,specialization,directorId,phone,email,password);
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send("coach created successfully");
    else
        res.status(statusCode).send(message);
});
//V
router.post("/director/signUp/actor",checkAuth("director"),async(req,res)=>{
    const {name,role,coachId,directorId,phone,email,password} = req.body;
    const result = await directorService.addActor(name,role,coachId,directorId,phone,email,password);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send("actor created successfully");
    else
        res.status(statusCode).send(message);
})
//V
router.post("/director/signUp/provider",checkAuth("director"),async(req,res)=>{
    const {name,phone,email,product,price,password} = req.body;
    const result = await directorService.addProvider(name,phone,email,product,price,password);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send("provider created successfully");
    else
        res.status(statusCode).send(message);
})

// practices
// V
router.post("/director/practice", checkAuth("director") ,async(req,res)=>{
    const {date,directorId,coachId,actorsId,startHour,endHour,location} = req.body;
    const result = await directorService.addPractice(date,directorId,coachId,actorsId,startHour,endHour,location);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send("practice created successfully");
    else
        res.status(statusCode).send(message);
}
)

// V
router.get("/director/practices", checkAuth("director"), async (req,res) => {
    const result= await directorService.getAllPractices();
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
})
// V
router.put("/director/practices/:practiceId", checkAuth("director") , async(req,res)=>{
    const {date,directorId,coachId,actorsId} = req.body;
    const practiceId = req.params.practiceId;
    const result= await directorService.updatePractice(practiceId,date,directorId,coachId,actorsId);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
    
  
})

router.post("/director/show", checkAuth("director") ,async(req,res)=>{
    const {name,date,location,price,numAvailableTickets,directorId} = req.body;
    const result = await directorService.addShow(name,date,location,price,numAvailableTickets,directorId);
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send("show created successfully");
    else
        res.status(statusCode).send(message);
}
)

router.get("/director/providers", checkAuth("director"), async (req,res) => {
    const result= await directorService.getAllProviders();
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
})

router.get("/director/actors", checkAuth("director"), async (req,res) => {
    const result= await directorService.getAllActors();
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
})

// V
router.get("/director/coaches", checkAuth("director"), async (req,res) => {
    const result= await directorService.getAllCoaches();
    const {statusCode,message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
})

router.get("/director/details/:id",checkAuth("director"),async (req,res)=>{
    const id = req.params.id;
    const result = await directorService.getDetails(id)
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send(result);
    else
        res.status(statusCode).send(message);
});



module.exports = router;