const { test, expect } = require('@playwright/test');
const Validator = require('jsonschema').Validator;

test('Random activity, validate the schema contract',
    async ({ request }) => {
        const baseURL = 'https://www.boredapi.com/api'
        const response = await request.get(`${baseURL}/activity`)
        console.log(await response.json())
        expect(response.ok).toBeTruthy();
        expect(response.status()).toBe(200);
        var activityScema = {
            'activity': { 'type': 'string' },
            'accessibility': { 'type': 'number' },
            'type': { 'type': 'string' },
            'participants': { 'type': 'number' },
            'price': { 'type': 'number' },
            'key': { 'type': 'number' }
        }
        var v = new Validator();
        console.log(response.json(), activityScema)
    })