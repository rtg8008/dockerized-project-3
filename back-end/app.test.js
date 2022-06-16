// const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = require('./app');
const request = require('supertest');

describe('unit tests for express application', ()=>{
  it('should test that hello world is recieved', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello World!')
      .end( (err, res) => {
        if (err) throw err;       
        done();
      })
  })

  it('should get equipment information', (done) => {
    request(app)
      .get('/equipment')
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.length).toBe(6)
      })
      .end((err) => {
        if (err) throw err;
        done();
      })
  })
  

})