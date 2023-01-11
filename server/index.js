const express = require('express');

const app = express()

app.get("/",(req,res)=>{
    res.send("I am endpoint")
})

app.listen(5000,()=>{
    console.log("listening to 5000")
})