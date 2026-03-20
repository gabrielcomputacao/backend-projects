"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "people",
      [
        {
          name: "Gabriel Henrique",
          email: "gabriel1@email.com",
          cpf: "11111111101",
          active: true,
          role: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Maria Silva",
          email: "maria2@email.com",
          cpf: "11111111102",
          active: true,
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "João Souza",
          email: "joao3@email.com",
          cpf: "11111111103",
          active: false,
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ana Costa",
          email: "ana4@email.com",
          cpf: "11111111104",
          active: true,
          role: "manager",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Carlos Lima",
          email: "carlos5@email.com",
          cpf: "11111111105",
          active: true,
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Fernanda Alves",
          email: "fernanda6@email.com",
          cpf: "11111111106",
          active: false,
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lucas Pereira",
          email: "lucas7@email.com",
          cpf: "11111111107",
          active: true,
          role: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Juliana Rocha",
          email: "juliana8@email.com",
          cpf: "11111111108",
          active: true,
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bruno Martins",
          email: "bruno9@email.com",
          cpf: "11111111109",
          active: false,
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Patricia Gomes",
          email: "patricia10@email.com",
          cpf: "11111111110",
          active: true,
          role: "manager",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
