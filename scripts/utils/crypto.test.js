const { randFromArray, rand, setGameSeed, cyrb128 } = require('./crypto.js');

describe('Random Number Functions', () => {
    test('randFromArray returns one of the options', () => {
        const arr = ['test'];
        const result = randFromArray(arr);
        expect(result).toEqual(expect.any(String)); // Expect the result to be a string
        expect(arr).toContain(result); // Additionally, expect the result to be one of the elements of arr
    });

    test('randFromArray returns one of the options', () => {
        const arr = ['test', 'test2', 'test3'];
        const result = randFromArray(arr);
        expect(result).toEqual(expect.any(String)); // Expect the result to be a string
        expect(arr).toContain(result); // Additionally, expect the result to be one of the elements of arr
    });

    test('randFromArray doesn\'t just return the first element', () => {
        const arr = ['test', 'test2', 'test3'];
        let result = randFromArray(arr);
        let count = 0;

        while (result === 'test' && count < 100) {
            count++;
            result = randFromArray(arr);
        }

        expect(result).not.toBe('test');
    });

    test('rand returns a number between 0 and 1', () => {
        const result = rand();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(1);
    });

    test('rand returns a new number each time', () => {
        const result1 = rand();
        const result2 = rand();
        expect(result1).not.toBe(result2);
    });

    test('setGameSeed sets the seed', () => {
        const seed = cyrb128('test');
        const result = setGameSeed('test');
        expect(result).toEqual(seed);
    });
});
