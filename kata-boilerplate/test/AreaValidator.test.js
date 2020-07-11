const AreaValidator = require('../src/AreaValidator.js')

describe("Area validator", () => {
    test("it should return true", () => {
        const firstStepOfParsing = [ '4 8', '........', '....*...', '...**...', '........' ];
        expect(AreaValidator.valid(firstStepOfParsing)).toBe(true)
    });
});