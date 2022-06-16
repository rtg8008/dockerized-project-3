/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('meta').del()
  await knex('meta').insert([
    { phase: 1, quantity: 1, location_lat: 34.609589, location_long: 48.359548},
    { phase: 2, quantity: 2, location_lat: 33.207471, location_long: 62.266827},
    { phase: 3, quantity: 3, location_lat: 31.686645, location_long: 65.947844},
  ]);
};
