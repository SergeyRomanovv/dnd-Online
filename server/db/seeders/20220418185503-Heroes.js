"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Hiros",
      [
        {
          title: 'Barbarian',
          url: '../images/Heroes/Barbarian.png',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Fighter',
          url: '../images/Heroes/Fighter.png',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Paladin',
          url: '../images/Heroes/Paladin.png',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Ranger',
          url: '../images/Heroes/Ranger.png',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Rogue',
          url: '../images/Heroes/Rogue.png',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Sorcerer',
          url: '../images/Heroes/Sorcerer.png',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Hiros", null, {});
  },
};
