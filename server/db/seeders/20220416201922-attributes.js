'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert(
      'Attributes',
      [
        {
          title: 'GOBLIN 1',
          url: '../images/Enemies/Goblin_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GOBLIN 2',
          url: '../images/Enemies/Goblin_2.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GOBLIN 3',
          url: '../images/Enemies/Goblin_3.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GOBLIN 4',
          url: '../images/Enemies/Goblin_4.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GOBLIN 5',
          url: '../images/Enemies/Goblin_5.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GOBLIN 6',
          url: '../images/Enemies/Goblin_6.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'HOBGOBLIN 1',
          url: '../images/Enemies/Hobgoblin_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GHOUL 1',
          url: '../images/Enemies/Ghoul_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'GHOUL 2',
          url: '../images/Enemies/Ghoul_2.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RAT 1',
          url: '../images/Enemies/Rat_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RAT 2',
          url: '../images/Enemies/Rat_2.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SKELETON 1',
          url: '../images/Enemies/Skeleton_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SKELETON 2',
          url: '../images/Enemies/Skeleton_2.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SKELETON 3',
          url: '../images/Enemies/Skeleton_3.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'MIMIC 1',
          url: '../images/Enemies/Mimic_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BANDIT 1',
          url: '../images/Enemies/Bandit_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ROGUE 1',
          url: '../images/Enemies/Rogue_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'KNIGHT 1',
          url: '../images/Enemies/Knight_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'MAGE 1',
          url: '../images/Enemies/Mage_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'MAGE 2',
          url: '../images/Enemies/Mage_2.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ZOMBIE 1',
          url: '../images/Enemies/Zombie_1.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'ZOMBIE 2',
          url: '../images/Enemies/Zombie_2.png',
          attr_category_id: 1,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },

        {
          title: 'NPC 1',
          url: '../images/NPCs/Npc_1.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 2',
          url: '../images/NPCs/Npc_2.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 3',
          url: '../images/NPCs/Npc_3.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 4',
          url: '../images/NPCs/Npc_4.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 5',
          url: '../images/NPCs/Npc_5.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 6',
          url: '../images/NPCs/Npc_6.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 7',
          url: '../images/NPCs/Npc_7.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 8',
          url: '../images/NPCs/Npc_8.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 9',
          url: '../images/NPCs/Npc_9.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 10',
          url: '../images/NPCs/Npc_10.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 11',
          url: '../images/NPCs/Npc_11.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 12',
          url: '../images/NPCs/Npc_12.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 13',
          url: '../images/NPCs/Npc_13.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 14',
          url: '../images/NPCs/Npc_14.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 15',
          url: '../images/NPCs/Npc_15.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 16',
          url: '../images/NPCs/Npc_16.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 17',
          url: '../images/NPCs/Npc_17.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'NPC 18',
          url: '../images/NPCs/Npc_18.png',
          attr_category_id: 2,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 1',
          url: '../images/Flora/Bush_1.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 2',
          url: '../images/Flora/Bush_2.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 3',
          url: '../images/Flora/Bush_3.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 4',
          url: '../images/Flora/Bush_4.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 5',
          url: '../images/Flora/Bush_5.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 6',
          url: '../images/Flora/Bush_6.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 7',
          url: '../images/Flora/Bush_7.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 8',
          url: '../images/Flora/Bush_8.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 9',
          url: '../images/Flora/Bush_9.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BUSH 10',
          url: '../images/Flora/Bush_10.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STUMP 1',
          url: '../images/Flora/Stump_1.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STUMP 2',
          url: '../images/Flora/Stump_2.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STUMP 3',
          url: '../images/Flora/Stump_3.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STUMP 4',
          url: '../images/Flora/Stump_4.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STUMP 5',
          url: '../images/Flora/Stump_5.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'STUMP 6',
          url: '../images/Flora/Stump_6.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'PLANT 1',
          url: '../images/Flora/Plant_1.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'PLANT 2',
          url: '../images/Flora/Plant_2.png',
          attr_category_id: 3,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },

        {
          title: 'BARREL 1',
          url: '../images/Storage/Barrel_1.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BARREL 2',
          url: '../images/Storage/Barrel_2.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BARREL 3',
          url: '../images/Storage/Barrel_3.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BOX 1',
          url: '../images/Storage/Box_1.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BOX 2',
          url: '../images/Storage/Box_2.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BOX 3',
          url: '../images/Storage/Box_3.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BOX 4',
          url: '../images/Storage/Box_4.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHEST 1',
          url: '../images/Storage/Chest_1.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHEST 2',
          url: '../images/Storage/Chest_2.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHEST 3',
          url: '../images/Storage/Chest_3.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHEST 3 OP',
          url: '../images/Storage/Chest_3_op.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHEST 4 OP',
          url: '../images/Storage/Chest_4_op.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHEST 5',
          url: '../images/Storage/Chest_5.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SACK 1',
          url: '../images/Storage/Sack_1.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SACK 2',
          url: '../images/Storage/Sack_2.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SACK 3',
          url: '../images/Storage/Sack_3.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SACK 4',
          url: '../images/Storage/Sack_4.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'SACK 5',
          url: '../images/Storage/Sack_5.png',
          attr_category_id: 4,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },


        {
          title: 'RUNES 1',
          url: '../images/Effects/Magic_1.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RUNES 2',
          url: '../images/Effects/Magic_2.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RUNES 3',
          url: '../images/Effects/Magic_3.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RUNES 4',
          url: '../images/Effects/Magic_4.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RUNES 5',
          url: '../images/Effects/Magic_5.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RUNES 6',
          url: '../images/Effects/Magic_6.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RUNES 7',
          url: '../images/Effects/Magic_7.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'RUNES 8',
          url: '../images/Effects/Magic_8.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BONES 1',
          url: '../images/Effects/Bones_1.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BONES 2',
          url: '../images/Effects/Bones_2.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'BONES 3',
          url: '../images/Effects/Bones_3.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CORPSE 1',
          url: '../images/Effects/Corpse_1.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CORPSE 2',
          url: '../images/Effects/Corpse_2.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CORPSE 3',
          url: '../images/Effects/Corpse_3.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CORPSE 4',
          url: '../images/Effects/Corpse_4.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CORPSE 5',
          url: '../images/Effects/Burnt_corpse_1.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CORPSE 6',
          url: '../images/Effects/Burnt_corpse_2.png',
          attr_category_id: 5,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },


        {
          title: 'CAMPFIRE 1',
          url: '../images/Attributes/Campfire_1.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CAMPFIRE 2',
          url: '../images/Attributes/Campfire_2.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CAMPFIRE 3',
          url: '../images/Attributes/Campfire_3.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'LIT 1',
          url: '../images/Attributes/Lit_1.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'LIT 2',
          url: '../images/Attributes/Lit_2.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'LEVER 1',
          url: '../images/Attributes/Lever_1.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'LEVER 2',
          url: '../images/Attributes/Lever_2.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHAIN 1',
          url: '../images/Attributes/Chain_1.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'CHAIN 2',
          url: '../images/Attributes/Chain_2.png',
          attr_category_id: 6,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'TOMB 1',
          url: '../images/Other/Tombstone_1.png',
          attr_category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'TOMB 2',
          url: '../images/Other/Tombstone_2.png',
          attr_category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'TOMB 3',
          url: '../images/Other/Tombstone_3.png',
          attr_category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'TOMB 4',
          url: '../images/Other/Tombstone_4.png',
          attr_category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
        {
          title: 'TOMB 5',
          url: '../images/Other/Tombstone_5.png',
          attr_category_id: 7,
          createdAt: new Date(),  
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Attributes', null, {});
  }
};
