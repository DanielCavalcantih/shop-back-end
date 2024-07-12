"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Teclado Gamer",
          description: "Teclado feito para jogos, perfeito para sua diversão.",
          price: 200,
          image:
            "https://http2.mlstatic.com/D_NQ_NP_965588-MLA50158986098_062022-O.webp",
          user_id: 1,
          created: "2023-02-14T10:00:00",
          updated: "2023-02-14T10:00:00",
        },
        {
          name: "Mouse Gamer",
          description: "Mouse feito para jogos, melhor sensor do mercado.",
          price: 200,
          image:
            "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/cnczxhuc/file.png",
          user_id: 2,
          created: "2023-02-14T10:00:00",
          updated: "2023-02-14T10:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
