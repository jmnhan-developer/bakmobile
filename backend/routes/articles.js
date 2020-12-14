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
  console.log("hello1 req query --------------create article",req.body)

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
        sellerToken:req.body.sellerToken,
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

console.log("hello1 req query upload", req.query)

  var imagePath = './tmp/ '+uniqid()+'avatar.jpg'
  console.log("hello2-------------- imagePath",imagePath)

  var resultCopy = await req.files.avatar.mv(imagePath);
    console.log("fichiers",req.files.avatar)
    console.log("hello3-----------resultCopy", resultCopy)

  if(!resultCopy) {    
    var resultCloudinary = await cloudinary.uploader.upload(imagePath);
    res.json(resultCloudinary);
    console.log("hello4 ----------- resultCloudinary",resultCloudinary)
  } else {
    res.json( {error:resultCopy} );
  } 

  fs.unlinkSync(imagePath);
});

router.get('/filter-articles', async function(req, res, next) {
  // console.log(req.query.subcat)
  let products = await articleModel.find({subcategory:req.query.subcat})
  console.log(products)
  res.json({products})
  
}); 

router.get('/get-article-by-seller', async function(req, res, next) {
  // console.log("console log de req query",req.query)
  let products = await articleModel.find({sellerToken:req.query.SellerToken}) 
  console.log('product by seller-----------------',products)
  res.json({products});

});



module.exports = router; 
