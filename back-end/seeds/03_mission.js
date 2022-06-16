/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mission').del()
  await knex('mission').insert([
    { statement: 'mission statement 1', location_long: 123.432, location_lat: 1234.23},
    { statement: 'mission statement 2', location_long: 143.23, location_lat: 1287.23},
    { statement: 'mission statement 3', location_long: 875.2345, location_lat: 1654.3},
    { statement: 'mission statement 4', location_long: 2345.34, location_lat: 127.654},
    { statement: 'mission statement 5', location_long: 7866.44, location_lat: 1134.3}
  ]);
};
