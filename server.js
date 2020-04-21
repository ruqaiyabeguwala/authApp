const config=require("config");
const express= require("express");
const app= express();
const PORT=process.env.PORT|5000;
const mongoose= require("mongoose");


mongoose.connect(config.get("mongoURI"),{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true})
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.error(err));


app.listen(PORT,()=>console.log("App running on port",PORT))