"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Teclado Gamer",
          description:
            "Teclado feito para jogos, perfeito para sua diversão.",
          price: 200,
          created: "2023-02-14T10:00:00",
          updated: "2023-02-14T10:00:00"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
