const movies=require('../Models/movieSchema')
exports.addtoWatchList=async(req,res)=>{
  const movie=req.body
  console.log(movie);
  try {
    const moviedata=movie;
    const newmovie=new movies(moviedata)
  const addmovie=await newmovie.save()  
  res.status(201).json(addmovie)
  } catch (error) {
    console.log(error);
    
  }
  
}
exports.getWatchList=async(req,res)=>{
  try{
    const watchlist=await movies.find()
    // console.log(watchlist);
    res.status(200).json(watchlist)
  }
  catch(error){
   res.status(401).json(error)
    
  }
}
exports.deleteMovie=async(req,res)=>{
  const {id}=req.params
  console.log(id);
  
  try {
    const deleteMovie=await movies.findByIdAndDelete({_id:id})
    res.status(200).json(deleteMovie)
    
    
  } catch (error) {
    res.status(401).json(error)
  }
}
exports.editMovie=async(req,res)=>{
  const{id}=req.params
  const Title=req.body.Title
  console.log(Title);
  try {
    const edittitle=await movies.findByIdAndUpdate({_id:id},{Title},{new:true})
   res.status(200).json(edittitle)
  } catch (error) {
    res.status(401).json(error)
  }
}