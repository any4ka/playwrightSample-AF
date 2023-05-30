const { test, expect } = require('@playwright/test');
const Validator = require('jsonschema').Validator;

test('Random activity, validate the schema contract',
    async ({ request }) => {
        const baseURL = 'https://www.boredapi.com/api'
        const response = await request.get(`${baseURL}/activity`)
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
        expect(response.json(), activityScema).toBeTruthy
    })
test('Random Activity - Test exact JSON', async ({ request }) => {
    const baseURL = 'https://www.boredapi.com/api'
    var key = 6706598
    var validateJSON = {
        "activity": "Learn the NATO phonetic alphabet",
        "type": "education",
        "participants": 1,
        "price": 0,
        "link": "https://en.wikipedia.org/wiki/NATO_phonetic_alphabet",
        "key": "6706598",
        "accessibility": 0
    }
    const response2 = await request.get(`${baseURL}/activity?key=${key}`)
    console.log((response2).json())
    expect(response2.ok).toBeTruthy();
    expect(response2.status()).toBe(200);
    expect(await response2.json()).toStrictEqual(validateJSON)
})