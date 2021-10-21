'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');
const { db } = require('../src/models');
const request = supertest(app.app);

// Initialize any things that our tests need
beforeAll(async () => {
  await db.drop();
  // make sure that my tables exist.
  await db.sync(); // creates our tables if they do not exist
});

// remove any side effects from our test
afterAll(async () => {
  // drops all table rows within our database instance.  After all tests 
  await db.drop();
});

describe('Testing the express server', () => {
  it('Should add a record to the database', async () => {
    const body = {'title': 'Toast', 'description': 'Delicious'};
    const response = await request.post('/food').send(body).set('Content-type', 'application/json');

    expect(response.statusCode).toBe(201);
  });

  it('Should get all the records in the database', async () => {
    const body = {'title': 'filler title', 'description': 'filler description'};
    const body2 = {'title': 'filler title2', 'description': 'filler description2'};
    const body3 = {'title': 'filler title3', 'description': 'filler description3'};
    await request.post('/food').send(body).set('Content-type', 'application/json');
    await request.post('/food').send(body2).set('Content-type', 'application/json');
    await request.post('/food').send(body3).set('Content-type', 'application/json');
    
    const response = await request.get('/food');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(4);
  });

  it('Should retrieve a specific record from the database', async () => {
    let response = await request.get('/food/1');
    expect(response.statusCode).toBe(200);

    response = JSON.parse(response.res.text);

    expect(response.id).toBe(1);
    expect(response.title).toBe('Toast');
    expect(response.description).toBe('Delicious');
  });

  it('Should update a specific record in the database', async () => {
    let response = await request.get('/food/1');
    expect(response.statusCode).toBe(200);

    response = JSON.parse(response.res.text);
    
    expect(response.id).toBe(1);
    expect(response.title).toBe('Toast');
    expect(response.description).toBe('Delicious');

    const body = {'title': 'Burnt toast', 'description': 'Not delicious'};
    
    await request.put('/food/1').send(body).set('Content-type', 'application/json');
    let updatedResponse = await request.get('/food/1');
    expect(updatedResponse.statusCode).toBe(200);
    
    updatedResponse = JSON.parse(updatedResponse.res.text);

    expect(updatedResponse.id).toBe(1);
    expect(updatedResponse.title).toBe('Burnt toast');
    expect(updatedResponse.description).toBe('Not delicious');
  });

  it('Should delete a specific record from the database', async () => {
    await request.delete('/food/1');
    let updatedResponse = await request.get('/food/1');
    expect(updatedResponse.statusCode).toBe(404);
  });
});
