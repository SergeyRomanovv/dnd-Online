'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Attr_categories',
      [
        {
          title: 'Enemies',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPCs',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Flora',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Storage',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Effects',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Attributes',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'Other',
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
      ]
    )
  },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Attr_categories', null, {});
  }
};
