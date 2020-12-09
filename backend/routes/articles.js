var express = require('express');
var router = express.Router();
var articleModel = require('../models/articles');

router.post('/create-article', async function(req, res, next) {
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
        images:req.body.image,
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
    let articles = await articleModel.find()
    res.json({articles});
  
});




module.exports = router;