const mongoose=require("mongoose")
const movieSchema=new mongoose.Schema({
  
},{strict:false})
module.exports=mongoose.model("movies",movieSchema)