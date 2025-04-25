const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vinshulyal:jqMKqApajZYbI7Nj@crudb.f8yvmgx.mongodb.net/",{
})

mongoose.connection.on("connected",()=>{
    console.log("connected to MongoDB")
})

mongoose.connection.on("error",(err)=>{
    console.log(`MongoDB connection error :${err}`);
})

module.exports = mongoose;