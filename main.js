const express= require("express")
const app= express()
const dbConnect =require("./db/db")
const usersRouter= require("./users/users")
const productsRouter=require("./products/products")

app.use(express.json())
dbConnect()

app.get('',(req,res)=>{
  res.send('hello world')
})
app.use('/users',usersRouter)
app.use("/products",productsRouter)
app.listen(3000, ()=>{
  console.log("running http://localhost:3000")
})