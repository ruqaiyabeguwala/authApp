const express= require("express");
const router= express.Router();
const User= require("./../models/User");
const jwt= require("jsonwebtoken")
const config= require("config")

// @route /login/new
//  @desc register user
router.post("/new",async (req,res)=>{
    try{
        const checkuser= await User.find({email});
        if(checkuser)
        return res.status(400).json("account already exists");

        const {email,password,name}= req.body;
   // bcrypt.hash(password, saltRounds,async function (err,   hash) {
        const user=new User({
            email: email,
            password:password,
            name:name
          })
          await user.save();
          const payload={
           user:{
             id:user.id
           } 
        }
        jwt.sign(payload,config.get('jwtSecret'),
       {expiresIn:360000},
       (err,token)=>{
       if(err) throw err;
       res.json({token})
         
       })
    
   
    }
   catch(err){
       console.error(err);
   }
  });


  // @route /login
  //  @desc login user
  router.post("/",async (req,res)=>{ 
   try{
    const user=await User.findOne({email:req.body.email});
    if(!user){
        return res.status(404).json("No user found");
    }
    else{
        if(user.password==req.body.password){
            const payload={
                user:{
                  id:user.id
                } 
             }
             jwt.sign(payload,config.get('jwtSecret'),
          {expiresIn:360000},
          (err,token)=>{
            if(err) throw err;
            res.json({token})
        })
    }
        else
        return res.status(401).json("incorrect password")
    }

   }
    catch(err){
        console.error(err)
    }
    })
    
  module.exports=router;