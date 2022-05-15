const express = require('express')
const app = express()
const usersRoute = require('./Routes/User'); 
const bodyParser = require('body-parser');
app.use(bodyParser.json())

require('dotenv').config();


const PORT = process.env.PORT || 8080;


app.use(usersRoute);

app.listen(PORT,()=>{
    console.log("Application Started",PORT)})
