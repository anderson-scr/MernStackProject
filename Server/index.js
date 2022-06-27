const express = require('express')
const userRoute = require('./Routes/homeRoute')
const cors = require('cors')
const bodyParser = require('body-parser')

// Setting up 
const app = express()
app.use(bodyParser.json( {limit: "5mb", extended: true} ))
app.use(bodyParser.urlencoded( {limit: "5mb", extended: true} ))
app.use(cors())

// Variables for connection with DB
const connectionURL = "mongodb+srv://anderson-rato:Mkgj6_a8vpDCCH8@ratocluster.pmx6pah.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;


// Connection with DB
const mongoose = require("mongoose")
mongoose.connect(connectionURL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}.`) })
  })
  .catch((error) => { 
    console.log(error)
  })



// Uses
app.use("/Home", userRoute)