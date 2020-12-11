var express = require('express');
var router = express.Router();
var userModel = require('../models/users')
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");
var uid2 = require("uid2");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/sign-up', async function(req,res,next){

  var error = []
  var result = false
  var saveUser = null

  const data = await userModel.findOne({
    email: req.body.email
  })

  if(data != null){
    error.push('utilisateur déjà présent')
  }

  if(req.body.username == ''
  || req.body.email == ''
  || req.body.password == ''
  ){
    error.push('champs vides')
  }


  if(error.length == 0){
    var salt = uid2(32);
    var newUser = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email:req.body.email,
      address:req.body.address,
      city:req.body.city,
      postalCode:req.body.postalCode,
      salt:salt,
      password: SHA256(req.body.password+salt).toString(encBase64),
      token:uid2(32)
    })
  
    saveUser = await newUser.save()
    
    
    if(saveUser){
      result = true
      console.log(saveUser);
    }
  }
  

  res.json({result, saveUser, error})
})

router.post('/sign-in', async function(req,res,next){

  console.log(req.body)
  var result = false
  var user = null
  var error = []
  
  if(req.body.email == ''
  || req.body.password == ''
  ){
    error.push('champs vides')
  }

  if(error.length == 0){
    
  user = await userModel.findOne({
  email: req.body.email
})

if(user){
  const passwordHash = SHA256(req.body.password + user.salt).toString(encBase64);
  var token = user.token
  console.log(passwordHash)
  console.log(user.password)
  if(passwordHash == user.password){
    
    result = true
    token=user.token
    console.log('user is',user)

  } else {
    result = false
    error.push('mot de passe incorrect')
  }
} else {
  error.push('email incorrect')
}
  }
  res.json({result, user, token, error})
})

router.get('/display-profile', async function(req, res, next) {
  let data = await userModel.findById(req.query.id)
  console.log(data)
  res.json({data});
});

module.exports = router;
