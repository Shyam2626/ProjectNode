const express=require("express");
const app=express();

app.get('/',(req,res) =>{
    res.send("hello bruh");
})


app.listen(3000,()  =>{
    console.log("server started");
});