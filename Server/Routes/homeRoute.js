const express = require('express')
const router = express.Router()
const home = require("../Controller/userController")

// http://localhost:5000/Home
router.get("/", home.getHomePosts)

module.exports = router;