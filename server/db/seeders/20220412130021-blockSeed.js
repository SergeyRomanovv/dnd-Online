'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert(
      'Blocks',
      [
        {
          title: 'GRASS 1',
          url: './images/Grass_1.jpg',
          type: 'grass',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'GRASS 2',
          url: './images/Grass_2.jpg',
          type: 'grass',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'GROUND 1',
          url: './images/Ground_1.jpg',
          type: 'ground',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'GROUND 2',
          url: './images/Ground_2.jpg',
          type: 'ground',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'SAND 1',
          url: './images/Sand_1.jpg',
          type: 'sand',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 1',
          url: './images/Stone_x4_1.jpg',
          type: 'stonex4',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 2',
          url: './images/Stone_x4_2.jpg',
          type: 'stonex4',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 3',
          url: './images/Stone_x4_3.jpg',
          type: 'stonex4',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 4',
          url: './images/Stone_x4_4.jpg',
          type: 'stonex4',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE 1',
          url: './images/Stone_1.jpg',
          type: 'stone',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE 2',
          url: './images/Stone_2.jpg',
          type: 'stone',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE 3',
          url: './images/Stone_3.jpg',
          type: 'stone',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE 4',
          url: './images/Stone_4.jpg',
          type: 'stone',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE 5',
          url: './images/Stone_5.jpg',
          type: 'stone',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        {
          title: 'STONE 6',
          url: './images/Stone_6.jpg',
          type: 'stone',
          createdAt: new Date(), // в seeder'ах нужно добавлять это руками
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Blocks', null, {});
  }
};
