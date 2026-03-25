"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
          {
            titulo: "Teste",
            descricao: "Teste",
           data_inicio: new Date('2026-04-01'),
            category_id:2,
            person_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "Node.js API",
            descricao: "Construindo APIs com Node.js",
            data_inicio: new Date("2026-04-01"),
            category_id: 1,
            person_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "Banco de Dados PostgreSQL",
            descricao: "Modelagem e consultas SQL",
            data_inicio: new Date("2026-04-01"),
            category_id: 2,
            person_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "UI/UX Design",
            descricao: "Fundamentos de design de interfaces",
            data_inicio: new Date("2026-04-01"),
            category_id: 3,
            person_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "Docker para Devs",
            descricao: "Containerização de aplicações",
            data_inicio: new Date("2026-01-01"),
            category_id: 1,
            person_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "Testes com Jest",
            descricao: "Testes automatizados em JS",
            data_inicio: new Date("2026-02-01"),
            category_id: 2,
            person_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "TypeScript Completo",
            descricao: "Tipagem estática no JavaScript",
            data_inicio: "2026-04-20",
            category_id: 1,
            person_id: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "Arquitetura de Software",
            descricao: "Boas práticas e padrões",
            data_inicio: new Date("2026-08-01"),
            category_id: 4,
            person_id: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "Git e GitHub",
            descricao: "Controle de versão na prática",
            data_inicio: new Date("2026-09-01"),
            category_id: 3,
            person_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            titulo: "Clean Code",
            descricao: "Escrevendo código limpo",
            data_inicio: new Date("2026-03-01"),
            category_id: 4,
            person_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
