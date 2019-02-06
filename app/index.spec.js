const request = require('supertest');
const server = require('./index');

describe('index.js', () => {
	it('should return status code 200 and JSON object from index route', async() => {
		const statusCode = 200;
		const expectedBody = { api: 'API root.' }
	})
})