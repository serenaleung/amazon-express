'use strict';

const M = require('../models/index');
const Product = M.Product;
const faker = require('faker');

module.exports = {
  up: function (queryInterface, Sequelize) {
    // return Product.create({title: 'Nikon', description: 'A very great camera', price: 689});

    const products = Array
      .from({length: 50})
      .map(function () {
        return Product.create({
          title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
          description: faker.hacker.phrase(),
          price: faker.commerce.price()
        })
      })
    return Promise.all(products);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
