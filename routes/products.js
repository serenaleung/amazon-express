const express = require('express');
const router = express.Router();
const Product = require('../models/index').Product;
const reviews = require('./reviews');

router.get('/', function (request, response, next){
  // response.send('Stuff');
  Product
    .findAll({order: [['createdAt', 'DESC'], ['updatedAt', 'DESC']]})
    .then(function(products){
      response.render('products/index', { products:products });
    })
})

router.get('/new', function (req, res) {
  const product = Product.build();

  res.render('products/new', {product: product});
})

router.get('/:id', function (req, res) {
  const id = req.params.id;

  Product
  .findById(id)
  .then(function(product) {
    return Promise.all([product, product.getReviews()])
  })
  .then(function([product, reviews]) {
    res.render('products/show', {product: product, reviews: reviews})
  })
})


router.post('/', function (req, res) {
  // res.send(req.body);

  const {title, description, price} = req.body;

  Product
  .create({title: title, desciption: description, price: price})
  .then(function (product) {
    res.redirect('/products');
  })
})

router.use('/:productId/reviews', reviews);

module.exports = router;
