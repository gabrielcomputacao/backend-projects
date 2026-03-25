'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('registrations', [
      {
        status: 'ativa',
        person_id: 1,
        course_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'ativa',
        person_id: 2,
        course_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'cancelada',
        person_id: 3,
        course_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'ativa',
        person_id: 4,
        course_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'pendente',
        person_id: 5,
        course_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'ativa',
        person_id: 6,
        course_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'cancelada',
        person_id: 7,
        course_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'ativa',
        person_id: 8,
        course_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'pendente',
        person_id: 9,
        course_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'ativa',
        person_id: 10,
        course_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('registrations', null, {});
    
  }
};
