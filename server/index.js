// const express = require('')

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// import bodyParser from 'body-parser';

import postRoutes from './routes/post.js'

const app = express();
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:false}));
// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const PORT = process.env.PORT ||5000;
// mongodb+srv://RetlnSkar:OI8WOJcHWt983SMI@skcluster0.tnepf.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb://localhost:27017/fullstack1", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
})
const db = mongoose.connection
db.on('error',err=>
{
    console.error(err)
})
db.once('open',()=>
{
    console.log("Connected to mongoose")
})

app.use('/posts',postRoutes)
app.listen( PORT , console.log(`Server is running at ${PORT}`))


// mongoose.set('useFindAndModify',false)
// mongoose.set('useFindAndModify', false);