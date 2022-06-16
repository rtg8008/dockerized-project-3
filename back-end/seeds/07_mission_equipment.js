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

  for(let i = 0 ; i < 3;i++){
    returnArray.push({mission_id: 2, meta_id: 2, equipment_id: 2})
  }
  return returnArray
}
