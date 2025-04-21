const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vinayakhulyal6143:d0Wp6nhBDO1wPvRW@crud_db.rrd01xh.mongodb.net",{
})

mongoose.connection.on("connected",()=>{
    console.log("connected to MongoDB")
})

mongoose.connection.on("error",(err)=>{
    console.log(`MongoDB connection error :${err}`);
})

module.exports = mongoose;