/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mission').del()
  await knex('mission').insert([
    { statement: 'mission statement 1', location_lat: 123.432, location_long: 1234.23},
    { statement: 'mission statement 2', location_lat: 143.23, location_long: 1287.23},
    { statement: 'mission statement 3', location_lat: 875.2345, location_long: 1654.3},
    { statement: 'mission statement 4', location_lat: 2345.34, location_long: 127.654},
    { statement: 'mission statement 5', location_lat: 7866.44, location_long: 1134.3}
  ]);
};
