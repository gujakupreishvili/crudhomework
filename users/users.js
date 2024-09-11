const {Router} =require("express")
const usersModel=require("../db/users.model")
const userMiddlewares =require("../middlewares/users.middlewares")

const usersRouter=Router()

usersRouter.get('',async(req,res)=>{
  const users = await usersModel.find()
  res.json(users)
})
usersRouter.post('',async(req,res)=>{
  const {name,email,lastname,age}=req.body
  if(!email) throw new Error ("Email is required")
  const user =await usersModel.create({name,email,lastname,age})
  res.json(user)
})
usersRouter.get('/:id', async(req,res)=>{
  const {id}=req.params
  const user = await usersModel.findById(id)
  if(!user) return res.status(404).json({error:true,message:"user not found"})
  res.json(user)
})
usersRouter.delete('/:id', async(req,res)=>{
  const {id}=req.params
  const user = await usersModel.findById(id)
  if(!user) return res.status(404).json({error:true,message:"user not found"})
  await usersModel.findByIdAndDelete(id)
  res.json(user)
})
usersRouter.patch('/:id', userMiddlewares,async(req,res)=>{
  const {id}=req.params
  const {name,email,lastname,age}=req.body
  const user = await usersModel.findById(id)
  if(!user) return res.status(404).json({error:true,message:"user not found"})
  const update = await usersModel.findByIdAndUpdate(id, {name,email,lastname,age},{new:true})
  res.json(update)
})


module.exports=usersRouter