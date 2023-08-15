const express=require("express");
const mongoose=require("mongoose");
const Product=require("./models/productModel");
const app=express();

app.use(express.json())

app.get('/',(req,res) =>{
    res.send("hello bruh");
});

app.post('/product', async (req,res) =>{
   try{
        const product=await Product.create(req.body)
        res.status(200).json(product);

   }catch(error){
    console.log(error.message);
    res.status(500).json({message:error.message});
   }
})

mongoose.connect('mongodb+srv://usershyam:shyamkaviya@cluster1.0sfxnq9.mongodb.net/Node-Api?retryWrites=true&w=majority')
.then(() =>{
    console.log("connected to mongo");
    app.listen(3000,()  =>{
        console.log("server started");
    });
}).catch(() =>{
    console.log("error bruh")
});