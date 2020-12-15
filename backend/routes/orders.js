var express = require('express');
var router = express.Router();
var orderModel = require('../models/orders');
const bodyParser = require('body-parser');


router.post('/validate-order', async function(req, res, next) {
    let newOrder = new orderModel({
        articleID:req.body.articleID,
        clientID:req.body.clientID,
        orderState:req.body.orderState,
        orderDate:new Date()
      })
    
    let result = false;
    saveOrder = await newOrder.save()

    if(saveArticle){
    result = true
    }

    res.json({result,saveOrder})
});

router.get('/get-all-orders', async function(req, res, next) {
    let order = await articleModel.findById(req.params.userID)
    res.json({orders});
});



module.exports = router;