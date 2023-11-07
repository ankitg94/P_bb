const mongoose = require("mongoose");
const colors   = require("colors");

const connectDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_URI);
         console.log(`connected to Mongo DATAbase 
         ${mongoose.connection.host}`.bgGreen.white)
    }
    catch(error){
      console.log(`Mongo Connect Errror ${error}`
      .bgRed.white)
    }
}
module.exports = connectDB;

