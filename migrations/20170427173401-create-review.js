'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        },

        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      ProductId: {
        type: Sequelize.INTEGER

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Reviews');
  }
};
