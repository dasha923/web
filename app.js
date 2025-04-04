const express = require('express')
const post = require('./post_service')
const user=require('./user_service')
const userService=new user.ServiceUser();
const postService = new post.ServicePost();
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/post/:id', (req, res) => {
  console.log(req.params)
  let m= postService.getByid(req.params.id)
  res.json(m)
})
app.get('/user/:uid',(req, res) => {
  console.log(req.params)
  let m= userService.getbyuid(req.params.uid)
  res.json(m)
})
app.post('/user_list', (req, res) => {
  console.log(req.body)
  let s =userService.getAllUser()
  res.json(s)
})
app.post('/post_list', (req, res) => {
  console.log(req.body)
  let s =postService.getAll()
  res.json(s)
})
app.post('/post_created', (req, res) => {
  console.log(req.body)
  //const p= new post.Post(req.body.writter,req.body.id,req.body.text)
  postService.createPost(req.body.text,req.body.writter)
  res.end()
})
app.post('/created_user', (req, res) => {
  console.log(req.body)
  userService.createUser(req.body.full_name,req.body.date_birth)
  res.end()
})
app.post('/user_edit', (req, res) => {
  console.log(req.body)
  userService.Useredit(req.body.full_name,req.body.date_birth, req.body.uid, req.body.rol, req.body.auid)
  res.end()
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.post('/edit', (req,res)=>{
   postService.edit(req.body.writter,req.body.text,+req.body.id)
   
  })
app.post('/createPost', ()=>{
  postService.createPost(req.params.text,)
})
app.post('/getByid', (req,res)=>{
postService.getByid(req.params.id,)
res.end()
})
app.post('/getAll', ()=>{
postService.getAll()
})
app.post('/getbyuid', (req, res)=>{
 userService.getbyuid(req.params.uid,)
 res.end()
 
})
app.post('/getAllUser',(req, res)=>{
 console.log("33")
  const s= userService.getAllUser()
 res.json(s)
})
