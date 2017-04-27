const express = require('express');
const router = express.Router({mergeParams: true});

const Models = require('../models/index');

const Product = Models.Review;
const Review = Models.Review;


// Reviews#create URL: /products/:productId/reviews VERB: Post
router.post('/', function (req, res) {
  const productId = req.params.productId;

  Review
    .create({content: req.body.content, rating: req.body.rating, ProductId: productId})
    .then(function () {res.redirect(`/products/${productId}`)})

  // res.send(Object.assign({}, req.body, req.params))
})

module.exports = router;
