const mongoose= require("mongoose");

const postSchema= new mongoose.Schema(
{
    postData:{
       type:String,
       required:true
   },
   date:{
       type:Date,
       default:Date.now()
   },
    
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    }
}
)

module.exports= Post= mongoose.model("post",postSchema);
