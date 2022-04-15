'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Ground',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Sand',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Grass',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Stones',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Dungeon Floor',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Dungeon Walls',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Dungeon Other',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
      ]
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});

  }
};
