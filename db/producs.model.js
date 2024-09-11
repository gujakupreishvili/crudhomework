const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  price:Number,
  weight:Number
})
module.exports= mongoose.model("product",productsSchema)