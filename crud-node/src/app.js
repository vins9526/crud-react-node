const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
const app = express();
const PORT = process.env.PORT || 5000;
const apiUrl = process.env.NODE_API;


app.use(bodyParser.json());
app.use(cors());
app.listen(PORT ,() => {
    console.log(`Server is running on ${apiUrl}:${PORT}`)
})

app.use("/api/user" , userRoutes);
