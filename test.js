const assert = require('chai').assert;
const request = require('supertest');
const app = require('./app');

describe('Testing routes', function() {
  it('GET / should return main.html', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.include(res.text, 'main.html'); 
        done();
      });
  });

  it('POST /signup should create a new user', function(done) {
    request(app)
      .post('/signup')
      .send({ username: 'testUser', password: 'testPassword', name: 'Test User' }) 
      .end(function(err, res) {
        if (err) return done(err);
        assert.include(res.text, 'Signup Successfull'); 
        done();
      });
  });


});