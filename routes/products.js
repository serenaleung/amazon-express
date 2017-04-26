const express = require('express');
const router = express.Router();
const Product = require('../models/index').Product;

router.get('/', function (request, response, next){
  // response.send('Stuff');
  Product
    .findAll()
    .then(function(products){
      response.render('products/index', { products:products });
    })
})

router.get('/:id', function (req, res) {
  const id = req.params.id;

  Product
  .findById(id)
  .then(function(product) {
    res.render('products/show', { product: product })
  });
})

module.exports = router;
