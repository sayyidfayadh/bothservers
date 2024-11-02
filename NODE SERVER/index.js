//load dot env
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const movieServer=express()
const router=require('./Router/router')
require('./db/Connection')
movieServer.use(cors())
movieServer.use(express.json())
movieServer.use(router)
const PORT=3000;
movieServer.listen(PORT,()=>{
  console.log(`movie server started running at ${PORT}`);
})

movieServer.get('/',(req,res)=>{
  res.status(200).send('<h1>celloooooooooooo</h1>')
})