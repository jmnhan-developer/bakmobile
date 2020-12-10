const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title:String,
    description:String,
    brand:String,
    kidsAge:String,
    price:String,
    shippingFees:String,
    category:String,
    subcategory:String,
    state:String,
    articleSold:Boolean,
    sellerID:String,
    images:Array,
    creationDate:Date
})

const articleModel = mongoose.model('articles',articleSchema)

module.exports = articleModel