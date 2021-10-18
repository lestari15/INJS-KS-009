'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   let arr = [
     {
       name: "IT",
       faculty: "Computer",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Economy",
       faculty: "Economy",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Law",
       faculty: "Law",
       createdAt: new Date(),
       updatedAt: new Date()
     },
   ]
   await queryInterface.bulkInsert("Majors", arr, {})
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("Majors", null, {})
  }
};
