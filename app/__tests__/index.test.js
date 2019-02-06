const request = require('supertest');
const server = require('../index');

describe('index.js', () => {
	it('should return status code 200 and JSON object from index route', async() => {
		const statusCode = 200;
		const expectedBody = 'API root.';

		const response = await request(server).get('/');

		expect(response.status).toEqual(statusCode);
		expect(response.type).toEqual('text/html');
		expect(response.body).toEqual(expectedBody);

	})
})