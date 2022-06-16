/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('equipment').del()
  await knex('equipment').insert([
    {name: 'FAL', subcategory_id: 0, caliber: '7.62x51mm NATO', max_range_meters: 600, armored: false, country: 'Belgian', image: 'https://dygtyjqp7pi0m.cloudfront.net/i/36526/31536191_1.jpg?v=8D6368F5BA07710'},
    {name: 'G3', subcategory_id: 0, caliber: '7.62x51mm NATO', max_range_meters: 400, armored: false, country: 'German', image: 'https://www.militaryfactory.com/smallarms/imgs/lrg/heckler-and-koch-hk-g3.jpg'},
    {name: 'SKS', subcategory_id: 0, caliber: '7.62x39mm', max_range_meters: 350, armored: false, country: 'Russian', image: 'https://th.bing.com/th/id/OIP.yRx-vnTfhhXGMiAHK7M0OQHaHa?pid=ImgDet&rs=1'},
    {name: 'AK-47/AKM', subcategory_id: 0, caliber: '7.62x39mm', max_range_meters: 300, armored: false, country: 'Russian', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/AK-47_type_II_noBG.png/1024px-AK-47_type_II_noBG.png'},
    {name: 'QBZ-95', subcategory_id: 0, caliber: '5.8×42mm', max_range_meters: 400, armored: false, country: 'Chinese', image: 'https://en.wikipedia.org/wiki/QBZ-95#/media/File:QBZ95_automatic_rifle_mod_noBG.png'},
    {name: 'TYPE 96 AND TYPE 96G', subcategory_id: 0, caliber: '125mm', max_range_meters: 1000, armored: true, country: 'Chinese', image: 'https://en.wikipedia.org/wiki/Type_96_tank#/media/File:TankBiathlon2017Individual-02.jpg'},

  ]);
};

/*
    table.string('name', 256) // specifies type, field name, and limit (i.e. character limit)
    table.integer('subcategory_id');    
    // table.foreign('subcategory_id').references('subcategory');
    table.integer('caliber');
    table.integer('max_range_meters');
    table.boolean('armored');
    table.string('country', 256);
    table.string('image', 1024);
*/