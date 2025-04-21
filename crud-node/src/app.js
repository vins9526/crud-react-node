require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
const app = express();
const PORT = process.env.PORT || 5000;
const host = process.env.HOST;

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT ,() => {
    console.log(`Server is running on ${host}:${PORT}`)
})

app.use("/api/user" , userRoutes);
