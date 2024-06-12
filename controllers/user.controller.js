const {Router} = require("express");
const userService = require("../services/user.service")
const router = Router();

// router.post("/login/manager",async(req,res)=>{
//     const { email, password } = req.body;
//     usersService.connectManger(email,password,(err,result)=>{
//         if(err)
//             return res.status(err.statusCode).json({error:err.message})
//         res.status(result.statusCode).json({data:result.data});
//     });
// });


router.post("/login/manager", async (req, res) => {
    const { email, password } = req.body;

    userService.connectManager(email, password, (result) => {
        
        const { statusCode, message, id, token } = result;

        
        if (statusCode === 200) {
            res.header("auth-token",token).status(statusCode).send({"token":token,"id":id});
        } else {
            res.status(statusCode).json({ message });
        }
    });
});

// router.post("/login/actor",async(req,res)=>{
//     await usersService.connectUser(req.body.email,req.body.password,res);
// });

// router.post("/login/coach",async(req,res)=>{
//     await usersService.connectUser(req.body.name,req.body.password,res);
// });
  
// router.post("/login/director",async(req,res)=>{
//     await usersService.connectUser(req.body.name,req.body.password,res);
// });

// router.post("/login/provider",async(req,res)=>{
//     await usersService.connectUser(req.body.name,req.body.password,res);
// });

module.exports = router;

