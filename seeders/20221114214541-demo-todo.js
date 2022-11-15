"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("todos", [
      {
        title: "Coba Todo 1",
        description: "blablablablabla",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Coba Todo 2",
        description: "blablablablabla",
        isCompleted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
