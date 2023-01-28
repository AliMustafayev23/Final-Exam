const express = require('express')
const app = express()
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
const port = 8000
const mongoose = require('mongoose');
const { Schema } = mongoose;
dotenv.config()
const featuresSchema = new Schema({
  image:String,
  name:  String, 
  description: String,
  price:Number,
});
const Features = mongoose.model('Features', featuresSchema);
app.use(cors())
app.use(bodyParser.json())
app.get('/features', (req, res) => {
  Features.find({},(err,docs)=>{
    if(!err){
      res.send(docs)
    }
  })
})
app.get('/features/:id', (req, res) => {
  let id=req.params.id
  Features.findById(id,(err,doc)=>{
    if(!err){
      res.send(doc)
    }
  })
})
app.delete('/features/:id', (req, res) => {
  let id=req.params.id
  Features.findByIdAndDelete(id,(err)=>{
    if(!err){
      res.send("silindi")
    }
  })
})
app.post('/features', (req, res) => {
 let features=new Features({
  image:req.body.image,
  name: req.body.name, 
  description:req.body.description,
  price:req.body.price,
 })
 features.save()
 res.send({message:"elave olundu"})
})
mongoose.connect('mongodb+srv://Ali:Ali@cluster0.x8qec5j.mongodb.net/?retryWrites=true&w=majority',(err)=>{
  if(!err){
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
});
