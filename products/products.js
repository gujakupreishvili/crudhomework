const {Router}=require("express")
const productsRouter=Router()
const productModel=require("../db/producs.model")
const productsMiddlewares=require("../middlewares/products.middlewares")

productsRouter.get("",async(req,res)=>{
  const product = await productModel.find()
  res.json(product)
})
productsRouter.post('',async(req,res)=>{
 const {name,price,weight}=req.body
 if(!name) throw new Error ("name is required")
 const product = await productModel.create({name,price,weight})
res.json(product)
})
productsRouter.get('/:id',async(req,res)=>{
  const {id}=req.params
  const product = await productModel.findById(id)
  if(!product) return res.status(404).json({error:true,message:"user not found"})
  res.json(product)
})
productsRouter.delete('/:id',async(req,res)=>{
  const {id}=req.params
  const product = await productModel.findById(id)
  if(!product) return res.status(404).json({error:true,message:"user not found"})
  await productModel.findByIdAndDelete(id)
  res.json(product)
})
productsRouter.patch('/:id',productsMiddlewares,async(req,res)=>{
  const {id}=req.params
  const {name,price,weight}=req.body
  const product = await productModel.findById(id)
  if(!product) return res.status(404).json({error:true,message:"user not found"})
  const update= await productModel.findByIdAndUpdate(id,{name,price,weight},{new:true})
  res.json(update)
})


module.exports=productsRouter