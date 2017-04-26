const express = require('express');
const router = express.Router();
const Product = require('../models/index').Product;

router.get('/', function (request, response, next){
  // response.send('Stuff');
  Product
    .findAll()
    .then(function(products){
      response.send(products);
    })
})

module.exports = router;
