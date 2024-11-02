const jsonServer=require('json-server') 
const userserver=jsonServer.create()
const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()
const PORT=3000;

userserver.use(middleware)
userserver.use(router)
userserver.listen(PORT,()=>{
  console.log(`userserver started running at port ${PORT}`);
})