const express = require('express');
const router = express.Router();

const Models = require('../models/index');

const Product = Models.Review;
const Review = Models.Review;

// Reviews#create URL: /products/:productId/reviews VERB: Post
router.post('/', function (req, res) {
  res.send(Object.assign({}, req.body, req.params))
})

module.exports = router;
