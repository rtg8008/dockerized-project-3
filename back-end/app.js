const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
app.use(express.json()); // do not forget!!!

// TEST
app.get('/', (req, res) => res.status(200).send('Hello World!'))
// TEST

// CREATE
app.post('/equipment', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})

app.post('/mission', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})

// READ FUNCTIONS
app.get('/equipment', (req, res) => {
  console.log('getting equipment data');
  knex
  .select('*')
  .from('equipment')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not retrieve data'))
})
app.get('/equipment/:id', (req, res) => {
  console.log('getting equipment id');
  knex
  .select('*')
  .from('equipment')
  .where({id: req.params.id})
  .then(data => {
    if (data.length === 0)
      res.status(404).send('Could not retrieve data');
    else
      res.status(200).json(data);
  })
  .catch(() => res.status(404).send('Could not retrieve data'))
})
app.get('/equipment/:category', (req, res) => {
  console.log('getting category data');
  knex
  .select('*')
  .from('equipment')
  .where({id: req.params.id})
  .then(data => {
    if (data.length === 0)
      res.status(404).send('Could not retrieve data');
    else
      res.status(200).json(data);
  })
  .catch(() => res.status(404).send('Could not retrieve data'))
  // knex
  // .select('*')
  // .from('category')
  // .then(data => {res.status(200).json(data)})
  // .catch(() => res.status(404).send('Could not category data'))
})
app.get('/equipment/category/:subcategory', async (req, res) => {
  console.log('getting equipment data in this subcategory');
  let temp = await knex('category').where({name: req.params.subcategory})
  console.log(req.params.subcategory);
  console.log(temp);
  knex('equipment')
  .where({subcategory_id: req.params.subcategory})
  .then(data => {
    if (data.length === 0)
      res.status(404).send('Could not retrieve data');
    else
      res.status(200).json(data);
  })
  .catch(() => res.status(404).send('Could not retrieve data'))
  // knex
  // .select('*')
  // .from('subcategory')
  // .then(data => {res.status(200).json(data)})
  // .catch(() => res.status(404).send('Could not subcategory data'))
})  
app.get('/mission', (req, res) => {
  console.log('getting mission data');
  knex
  .select('*')
  .from('mission')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not retrieve data'))
})

app.get('/mission/:id', async (req, res) => {
  console.log('getting mission id');
  
  // TEST NESTED JOIN
  // let temp = await knex.select('*').from('mission_equipment').join('accounts', function() {
  //   this.on(function() {
  //     this.on('accounts.id', '=', 'users.account_id')
  //     this.orOn('accounts.owner_id', '=', 'users.id')
  //   })
  // })
  
  // console.log('what our test returned: ', temp);
  // TEST NESTED JOIN

  let missionEquipment = await knex('mission_equipment')
  .join('equipment', 'equipment.id', '=', 'mission_equipment.equipment_id')
  .join('meta', 'meta.id', '=', 'mission_equipment.meta_id')
  .join('subcategory', 'subcategory.id', '=', 'equipment.subcategory_id')
  .join('category', 'category.id', '=', 'subcategory.category_id')
  .where('mission_equipment.mission_id', req.params.id)
  .select('equipment.id as equipment_id',
        'equipment.name as equipment_name',
        'category.name as category',
        // 'equipment.subcategory_id as subcategory_id',
        'subcategory.name as subcategory',
        'equipment.caliber as caliber',
        'equipment.max_range_meters as maxrangemeters',
        'equipment.armored as armored',
        'equipment.country as country',
        'equipment.image as image',
        'meta.quantity as quantity',
        'meta.location_lat as lat',
        'meta.location_long as lon',
        'meta.phase as phase'
        )
  
  console.log('temp Var: ', missionEquipment)
  
  await knex
  .select('*')
  .from('mission')
  .where({id: req.params.id})
  .then(data => {
    if (data.length === 0)
      res.status(404).send('Could not retrieve mission data');
    else
    {
      data[0].equipment = missionEquipment;
      res.status(200).json(data[0]);

    }
  })
  .catch(() => res.status(404).send('Could not retrieve mission data'))
})

app.get('/category', (req, res) => {
  console.log('getting category data');
  knex
  .select('*')
  .from('category')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not category data'))
})


app.get('/subcategory', (req, res) => {
  console.log('getting subcategory data');
  knex
  .select('*')
  .from('subcategory')
  .then(data => {res.status(200).json(data)})
  .catch(() => res.status(404).send('Could not subcategory data'))
}) 
// UPDATE FUNCTIONS
app.patch('/mission/:id', (req, res) => {
  console.log('patching mission at id: ', req.params.id);
  console.log('request body: ', req.body);
  res.status(200).send('Hello World!');
})
// DELETE FUNCTIONS
app.delete('/mission/:id', (req, res) => {
  console.log('deleting mission at id: ', req.params.id);
  res.status(200).send('Hello World!');
})

module.exports = app;

// .select('equipment.id as id',
//         'equipment.name as name',
//         'equipment.subcategory_id as subid',
//         'equipment.caliber as caliber',
//         'equipment.max_range_meters as maxrangemeters',
//         'equipment.armored as armored',
//         'equipment.country as country',
//         'equipment.image as image')