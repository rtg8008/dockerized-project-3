const app = require('./app');
const request = require('supertest');

describe('unit tests for express application', ()=>{
  it('test that hello world is recieved', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello World!')
      .end( (err, res) => {
        if (err) throw err;
        
        done();
      })
  })
  

})