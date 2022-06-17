/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mission_equipment').del()
  await knex('mission_equipment').insert(
    testing()
  );
};

let testing = ()=>{
  let returnArray = []

  for(let i = 0 ; i < 15;i++){
    returnArray.push({mission_id: i%5+1, meta_id: i+1, equipment_id: i%20+1})
  }
  return returnArray
}
