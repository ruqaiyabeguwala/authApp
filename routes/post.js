const express= require("express");
const router= express.Router();
const auth= require("./../middleware/auth")
const Post =require("./../models/Post")

router.post("/add",auth,async (req,res)=>{
    try{
 // const {data}= req.body;
  const newPost= new Post({
    postData:req.body.postData
  //  userId:req.user.id
  })
 const result=await newPost.save();
 res.json("post saved",result)
}
catch(err){
    console.error(err);
    return res.status(501).send("error while saving post")
}
})


module.exports=router;