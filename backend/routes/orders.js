var express = require('express');
var router = express.Router();
var orderModel = require('../models/orders');
var articleModel = require('../models/articles');

const bodyParser = require('body-parser');


router.post('/validate-order', async function(req, res, next) {
    
    console.log('route validate order req.body:',req.body)

    let newOrder = new orderModel

       ({
         
         articleId:req.body.articleId,
         clientId:req.body.clientToken,
         orderState:'en cours',
         orderDate:new Date()
         
       })
    
    let result = false;
    var saveOrder = await newOrder.save()

    let findArticle= await articleModel.updateOne(
    { _id: req.body.articleId},
    { isVisible:false }
    );

    console.log(findArticle);

    if(saveOrder&&findArticle){
     result = true
    }

   res.json({result,saveOrder,findArticle})

});




router.get('/get-all-orders', async function(req, res, next) {
    let order = await articleModel.findById(req.params.userID)
    res.json({orders});
});



module.exports = router;