
import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { addToWatchListAPI, editTitleAPI, getAllWatchListAPI,  removeFromWatchListAPI } from '../Services/allAPi';
function App() {
const[search,setSearch]=useState("")
const [movie,setMovie]=useState({})
const[watchlist,setwatchList]=useState([])
const[title,setTitle]=useState("")
console.log(title);

// console.log(watchlist);

const apikey=`d85e8bd`;
const apiurl= `http://www.omdbapi.com/?apikey=${apikey}&t=${search}`

const getMovie=async ()=>{
  try {
    const response=await axios.get(apiurl)
    console.log(response?.data);
setMovie(response.data)
    
    
  } catch (error) {
    console.log(error);
    
  }
}
const addtowatchlist=async()=>{
  try {
    const response=await addToWatchListAPI(movie)
    getAllWatchList()
  } catch (error) {
    console.log(error);
      }
}
useEffect(()=>{
  getAllWatchList()
},[])
const getAllWatchList=async()=>{
const result=await getAllWatchListAPI()
setwatchList(result.data)
}


const removeFromWatchList=async(id)=>{
  try {
    console.log(id);
    removeFromWatchListAPI(id)
    getAllWatchList()
  } catch (error) {
    console.log(error);
    
  }
}

const changetitle=async(id)=>{
const updatemovie=watchlist.find(item=>item.id===id)
const toupdatemovie={...updatemovie,Title:title}
await editTitleAPI(id,toupdatemovie)
setwatchList(watchlist.map((item)=>(item.id==id?{...item,Title:title}:item)))
getAllWatchList()
// await editTitleAPI(id,title)
}
  return (
    <>
       <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />   
        <button className='btn btn-primary'onClick={getMovie}>search</button>
        {movie&&movie.Response==="True"?(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie?.Poster}/>
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>
        {movie?.Plot}
        </Card.Text>
        <Button variant="primary" onClick={addtowatchlist}>Add to watched</Button>
      </Card.Body>
    </Card>) :<></>
    }
    <div>
      {watchlist?.length>0?(watchlist.map((item,index)=>(
     <div key={index}>
      
         <h1>{item?.Title}</h1>
         <h3>{item?.Year}</h3>
         {/* <h3>{item?._id}</h3> */}
         <input type="text" placeholder='edit title' onChange={(e)=>setTitle(e.target.value)} />
         <button className='btn ' onClick={()=>changetitle(item._id)}>change</button>
     <button className='btn btn-danger' onClick={()=>removeFromWatchList(item?._id)}>remove</button>
     </div>
      ))):<p>nothin</p>}
    </div>
    </>
  )
}

export default App
