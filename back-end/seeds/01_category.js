/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {name: 'Reconnaissance'},
    {name: 'Infantry Weapons'},
    {name: 'Infantry Vehicles'},
    {name: 'Tanks'},
    {name: 'Anti-Tank and Anti-Armor'},
    {name: 'Artillery'},
    {name: 'Engineer and CBRN'},
    {name: 'Logistics'},
    {name: 'C2 and Information Warfare'},
    {name: 'Countermeasures'},
    {name: 'Insurgent and Gurilla Forces'},
    {name: 'Chemical Systems'}
  ]);
};
