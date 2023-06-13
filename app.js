require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 3500
const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose');

const adminRoute = require('./routes/adminRoute'); 
const movieRoute = require('./routes/movieRoute'); 
const filterRoute = require('./routes/filterRoute'); 

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection

db.on('error', (errorMessage)=>{
    console.log(errorMessage)
})

db.once('open', ()=>{
    console.log('Connected successfully to the database!');
})

app.get('/', (req, res)=>{
    res.send("hello from app.js");
})

app.use(express.json());

app.use('/api/v1/admin/new', adminRoute);
app.use('/api/v1/movie', movieRoute);

app.listen(PORT, ()=>{
    console.log(`Server Running on PORT ${PORT}`);
})