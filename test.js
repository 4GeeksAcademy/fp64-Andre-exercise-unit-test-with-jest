const {fromDollarToYen, fromEuroToDollar, fromYentoPound} = require('./app');

test('Test Conversion inside from Dollar to Yen', () => {
    const expectedResult = fromDollarToYen(4);
    expect(expectedResult).toBe(612.20);
} );

test('Test Conversion inside from Euro to Dollar', () => {
    const expectedResult = fromEuroToDollar(5);
    expect(expectedResult).toBe(5.300000000000001);
} );

test('Test Conversion inside from Yen to Pound', () => {
    const expectedResult = fromYentoPound(6);
    expect(expectedResult).toBe(0.0318);
} );