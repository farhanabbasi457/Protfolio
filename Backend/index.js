
const express = require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const dotenv= require("dotenv");
dotenv.config();
require("./config/config1");

const feedbacksR = require("./routes/feedbacksR");


const app = express();

app.use(cors());
// Serve static files from the 'Pictures' directory
app.use(express.static('./public'));
app.use(bodyparser.json());


app.use("/feedbacks",feedbacksR);


const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`service running on port ${port}`);
})