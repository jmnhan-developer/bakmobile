var express = require('express');
var router = express.Router();
var articleModel = require('../models/articles');


var uniqid = require('uniqid');
const fs = require('fs')
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'cedric', 
  api_key: '544843767135618', 
  api_secret: 'FRzV3kMqg2-g8mpCduExkzLFY1o' 
});


router.post('/create-article', async function(req, res, next) {
  console.log("hello1",req.body)

    let newArticle = new articleModel({
        title:req.body.title,
        description:req.body.description,
        brand:req.body.brand,
        kidsAge:req.body.kidsAge,
        price:req.body.price,
        shippingFees:req.body.shippingFees,
        category:req.body.category,
        subcategory:req.body.subcategory,
        state:req.body.state,
        sellerID:req.body.sellerID,
        images:JSON.parse(req.body.images),
        creationDate:new Date()
      })
    
    let result = false;
    saveArticle = await newArticle.save()

    if(saveArticle){
    result = true
    }
      res.json({result,saveArticle})
});


router.get('/get-all-articles', async function(req, res, next) {
    let products = await articleModel.find()
    // console.log(products)
    res.json({products});
  
});


router.post('/upload', async function(req, res, next) {
// console.log("hello1")
  var imagePath = './tmp/ '+uniqid()+'avatar.jpg'
  // console.log("hello2",imagePath)

  var resultCopy = await req.files.avatar.mv(imagePath);
    console.log("fichiers",req.files.avatar)
    // console.log("hello3")

  if(!resultCopy) {    
    var resultCloudinary = await cloudinary.uploader.upload(imagePath);
    res.json(resultCloudinary);
    // console.log("hello4",resultCloudinary)
  } else {
    res.json( {error:resultCopy} );
  } 

  fs.unlinkSync(imagePath);
});

module.exports = router; 
