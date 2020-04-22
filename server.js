const config=require("config");
const express= require("express");
const app= express();
const PORT=process.env.PORT|5000;
const mongoose= require("mongoose");
const bodyParser= require("body-parser")
const cors= require("cors")

mongoose.connect(config.get("mongoURI"),{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true})
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.error(err));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({origin: 'http://localhost:3000'}))
app.use("/login",require("./routes/login"));
app.use("/post",require("./routes/post"));
app.listen(PORT,()=>console.log("App running on port",PORT))