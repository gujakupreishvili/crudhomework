const {default:mongoose} = require("mongoose")
require("dotenv").config()

module.exports= async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(" connect to db successfully")
  } catch (error) {
    console.log("cant connect to db",error)
    
  }
}