const { expect } = require('@jest/globals');
const { CalculadoraCompleja } = require('./CalculadoraCompleja');
// // const CalculadoraCompleja = require('./CalculadoraCompleja');
// CalculadoraCompleja

describe('Stock de seguridad', () => {
    const expected = [2, 3, 6, 2];
    it('Stock de seguridad de [4, 17, 36, 9] debe ser [2, 3, 6, 2] ', () => {
        expect(CalculadoraCompleja([4, 17, 36, 9])).toEqual(expect.arrayContaining(expected));
    });
    const expectedLimit = [2, 3, 4, 12];
    it('Casos limites [0,10,20,100] deben ser [2,3,4,12]', () => {
        expect(CalculadoraCompleja([0, 10, 20, 100])).toEqual(expect.arrayContaining(expectedLimit));
    });
});