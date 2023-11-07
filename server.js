//package import
const express  = require('express');
const cors     = require('cors');
const morgan   = require('morgan');
const colors   = require('colors');
const dotenv   = require('dotenv'); 
const  path    = require('path');
//file imports
const connectDB = require("./config/db");

//env config(securing the)
dotenv.config();

//router import 
const userRoutes = require('./routes/userRoutes') 
const blogRoute = require('./routes/blogRoute')

//mongodb connection
connectDB();

//rest object
const app = express()
 

//3-middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//4-routes 
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/blog",blogRoute);

//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
});

//5-port 
const PORT = process.env.PORT ||8080;
//6-listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode Port at ${PORT}`.bgCyan.white);
})