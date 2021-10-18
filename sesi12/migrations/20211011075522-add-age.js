'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn("Users", "age", {type: Sequelize.INTEGER})
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn("Users", "age", {type: Sequelize.INTEGER})
  }
};
