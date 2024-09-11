const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  lastname: String,
  age: Number,
});

module.exports = mongoose.model("users", usersSchema);
