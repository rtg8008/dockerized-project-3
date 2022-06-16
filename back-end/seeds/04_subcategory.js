/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('subcategory').del()
  await knex('subcategory').insert([
    {name: 'Reconnaissance Vehicles', category_id: 1},
    {name: 'Reconnaissance Systems', category_id: 1},
    {name: 'Smalls Arms', category_id: 2},
    {name: 'Grenade Launchers', category_id: 2},
    {name: 'Multi-purpose and Flame Launchers', category_id: 2},
    {name: 'Antitank Weapons', category_id: 2},
    {name: 'Obscurants and Flame', category_id: 2},
    {name: 'Armored Personnel Carriers', category_id: 3},
    {name: 'Infantry Fighting Vehicles', category_id: 3},
    {name: 'Specialized Carriers', category_id: 3},
    {name: 'Combat Support Vehicles', category_id: 3},
    {name: 'Dismounted Infantry Crew-served Weapons', category_id: 5},
    {name: 'Portable Mounted Crew-served Weapons', category_id: 5},
    {name: 'Towed Antitank Guns', category_id: 5},
    {name: 'Heavy Armored Combat Vehicles', category_id: 5},
    {name: 'ATGM Launcher Vehicles', category_id: 5},
    {name: 'Artillery Command and Recon Vehicles', category_id: 6},
    {name: 'Artillery Reconnaissance', category_id: 6},
    {name: 'Towed Cannon', category_id: 6},
    {name: 'Self-Propelled Cannon', category_id: 6},
    {name: 'Multiple Rocket Launcher', category_id: 6},
    {name: 'Mortars/Gun-Mortar Systems', category_id: 6},
    {name: 'Mine/Countermine', category_id: 7},
    {name: 'General Engineer', category_id: 7},
    {name: 'Decontamination and Smoke Vehicles', category_id: 7},
    {name: 'Transportation', category_id: 8},
    {name: 'Maintenance', category_id: 8},
    {name: 'General Utility', category_id: 8},
  ]);
};
