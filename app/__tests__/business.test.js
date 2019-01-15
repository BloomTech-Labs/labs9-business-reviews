const server = require('../index.js');
const request = require('supertest');
const db = require('../db/dbinit');

describe('GET request on Business', () => {
  test('should return a status code of 200', async () => {
    const response = await request(server).get('/api/business');
    expect(response.status).toBe(200);
  });

  test('should return a defined object', async () => {
    const response = await request(server).get('/api/business');
    expect(response.body).toBeDefined();
  });

  test('should return a status message of OK', async () => {
    const response = await request(server).get('/api/business');
    expect(response.res.statusMessage).toBe('OK');
  });
});

describe('GET BY ID test', () => {
  let singleBusinessId;

  const business = {
    name: 'doughnuts',
    rating: 2,
    image: 'store.jpg'
  };
  beforeEach(async () => {
    const response = await request(server)
      .post('/api/business')
      .send(business);
    const [id] = response.body;
    singleBusinessId = id;
  });

  afterEach(async () => {
    await db('businesses')
      .where({ id: singleBusinessId })
      .del();
  });

  test('should be returning a defined user object', async () => {
    const response = await request(server).get(
      `/api/business/${singleBusinessId}`
    );
    expect(response.body).toBeDefined();
  });
});

describe('POST business test', () => {
  let singleBusinessId;

  const business = {
    name: 'doughnuts',
    rating: 2,
    image: 'store.jpg'
  };

  afterEach(async () => {
    await db('businesses')
      .where({ id: singleBusinessId })
      .del();
  });

  test('should be returning a defined business after post object', async () => {
    const response = await request(server)
      .post(`/api/business/`)
      .send(business);

    const [id] = response.body;
    singleBusinessId = id;
    expect(response.body).toBeDefined();
  });

  test('should be returning a status code of 201 object', async () => {
    const response = await request(server)
      .post(`/api/business/`)
      .send(business);

    const [id] = response.body;
    singleBusinessId = id;
    expect(response.status).toBe(201);
  });
});

describe('PUT test', async () => {
  const business = {
    name: 'doughnuts',
    rating: 2,
    image: 'store.jpg'
  };

  const updatedBusiness = {
    name: 'barbecue',
    rating: 5,
    image: 'store.jpg'
  };
  let singleBusinessId;

  beforeEach(async () => {
    const response = await request(server)
      .post('/api/business')
      .send(business);
    const [id] = response.body;
    singleBusinessId = id;
  });
  afterEach(async () => {
    await db('businesses')
      .where({ id: singleBusinessId })
      .del();
  });

  test('should be updating with the updated Business', async () => {
    await request(server)
      .put(`/api/business/${singleBusinessId}`)
      .send(updatedBusiness);

    const response = await request(server).get(
      `/api/business/${singleBusinessId}`
    );
    expect(response.body).toEqual([
      {
        name: 'barbecue',
        rating: 5,
        image: 'store.jpg',
        id: singleBusinessId
      }
    ]);
  });
});

describe('DELETE test', async () => {
  const business = {
    name: 'doughnuts',
    rating: 2,
    image: 'store.jpg'
  };

  let singleBusinessId;

  beforeEach(async () => {
    const response = await request(server)
      .post('/api/business')
      .send(business);
    const [id] = response.body;
    singleBusinessId = id;
  });

  test('should be deleting with the status code of 200', async () => {
    const response = await request(server).del(
      `/api/business/${singleBusinessId}`
    );
    expect(response.status).toBe(200);
  });
});
