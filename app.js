import express from 'express'
const app=express()
const port=process.env.PORT || '3000';
import { join} from 'path';
const database_url=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"
import mongoose from 'mongoose';
import connectdb from './db/connectdb.js';
import router from './routes/web.js'

// database connnection
connectdb(database_url);

// this is built in middleware function in express . it parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({extended:false}))

// serve static file
app.use(express.static(join(process.cwd(),'public')))
app.use('/edit',express.static(join(process.cwd(),'public')))


// set template engine
app.set("view engine","ejs");

//routes connction
app.use('/',router);
app.listen(port,()=>{
    console.log(`ip address connnected and  server is running in port no is ${port}`);
})

//end