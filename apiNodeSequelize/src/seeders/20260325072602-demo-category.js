'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('categories', [
      {
        titulo: 'Tecnologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Saúde',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Educação',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Entretenimento',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};
