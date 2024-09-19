const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');


// app
const app = express();
app.use(express.json());
app.use(cors()); // Enable all CORS requests



app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send("hellooo from serverr test")
})



const port = process.env.PORT  || 3000;
console.log(port)
app.listen(port,()=>{
    console.log("server is runnnning on this port"+ port)
})

