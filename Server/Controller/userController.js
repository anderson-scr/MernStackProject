const UserModel = require("../Models/userModel")

const Home = (req, res) => {
  res.send("<h1>Hello from homeController</h1>")
}


// Call to get the home list
const getHomePosts = async (req, res) => {
  try {
    // This guy is asuncronus
    const getHomePosts = await UserModel.UserModel.find()
    res.json(getHomePosts)

  } catch (error) {
    res.json({ message: error.message })
  }
}

module.exports = { Home, getHomePosts }