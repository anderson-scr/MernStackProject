const mongoose = require('mongoose')

// User table
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})
const UserModel = mongoose.model("User", UserSchema)



module.exports = { UserModel };