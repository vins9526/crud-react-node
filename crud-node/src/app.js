require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
const app = express();
const PORT = process.env.PORT || 5000;
const nodeApi = process.env.NODE_API;


console.log("NODE_API:", nodeApi); // Debugging
console.log("PORT:", PORT); // Debugging

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT ,() => {
    console.log(`Server is running on ${nodeApi}:${PORT}`)
})

app.use("/api/user" , userRoutes);
