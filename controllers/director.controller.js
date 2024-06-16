const {Router} = require("express");
const router = Router();
router.post("/signUp/coach/",loggedIn("director"), async (req, res) => {
    const {name,specialization,directorId,phone,email,publicPassword} = req.body
    const result = await directorService.addCoach(name,specialization,directorId,phone,email,publicPassword);
    const { statusCode, message} = result;
    if(!statusCode)
        res.status(200).send("coach created successfully");
    else
        res.status(statusCode).send(message);
});


module.exports = router;