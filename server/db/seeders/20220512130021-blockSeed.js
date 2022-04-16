'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert(
      'Blocks',
      [
        {
          title: 'GRASS 1',
          url: '../images/Grass_1.jpg',
          category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GRASS 2',
          url: '../images/Grass_2.jpg',
          category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GROUND 1',
          url: '../images/Ground_1.jpg',
          category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GROUND 2',
          url: '../images/Ground_2.jpg',
          category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SAND 1',
          url: '../images/Sand_1.jpg',
          category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 1',
          url: '../images/Stone_x4_1.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 2',
          url: '../images/Stone_x4_2.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 3',
          url: '../images/Stone_x4_3.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE x4 4',
          url: '../images/Stone_x4_4.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE 1',
          url: '../images/Stone_1.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE 2',
          url: '../images/Stone_2.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE 3',
          url: '../images/Stone_3.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE 4',
          url: '../images/Stone_4.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE 5',
          url: '../images/Stone_5.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STONE 6',
          url: '../images/Stone_6.jpg',
          category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS B',
          url: '../images/Walls/Abyss_B.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS L',
          url: '../images/Walls/Abyss_L.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS LB',
          url: '../images/Walls/Abyss_LB.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS LT',
          url: '../images/Walls/Abyss_LT.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS R',
          url: '../images/Walls/Abyss_R.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS RB',
          url: '../images/Walls/Abyss_RB.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS RT',
          url: '../images/Walls/Abyss_RT.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ABYSS T',
          url: '../images/Walls/Abyss_T.jpg',
          category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'DOOR C B',
          url: '../images/Walls/DoorC_B.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'DOOR C T',
          url: '../images/Walls/DoorC_T.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'FLOOR 1',
          url: '../images/Walls/Floor_1.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'FLOOR 2',
          url: '../images/Walls/Floor_2.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'FLOOR 3',
          url: '../images/Walls/Floor_3.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'FLOOR 4',
          url: '../images/Walls/Floor_4.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'FLOOR 5',
          url: '../images/Walls/Floor_5.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'HOLE 1',
          url: '../images/Walls/Hole_1.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SHARP 1',
          url: '../images/Walls/Sharp_1.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STAIRS 1',
          url: '../images/Walls/Stairs_1.jpg',
          category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL ACCS B',
          url: '../images/Walls/Wall_Accs_B.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL ACCS L',
          url: '../images/Walls/Wall_Accs_L.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL ACCS R',
          url: '../images/Walls/Wall_Accs_R.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL ACCS T',
          url: '../images/Walls/Wall_Accs_T.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL HB',
          url: '../images/Walls/Wall_HB.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL HT',
          url: '../images/Walls/Wall_HT.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL IBL',
          url: '../images/Walls/Wall_IBL.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL IBR',
          url: '../images/Walls/Wall_IBR.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL ITL',
          url: '../images/Walls/Wall_ITL.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL ITR',
          url: '../images/Walls/Wall_ITR.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL LB',
          url: '../images/Walls/Wall_LB.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL LT',
          url: '../images/Walls/Wall_LT.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL RB',
          url: '../images/Walls/Wall_RB.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL RT',
          url: '../images/Walls/Wall_RT.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL VL',
          url: '../images/Walls/Wall_VL.jpg',
          category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'WALL VR',
          url: '../images/Walls/Wall_VR.jpg',
          category_id: 6,
          createdAt: new Date(),  
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