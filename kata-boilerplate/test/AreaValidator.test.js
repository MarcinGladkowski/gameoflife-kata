const AreaValidator = require('../src/AreaValidator.js')

describe("Area validator", () => {
    test("it should return true", () => {
        const firstStepOfParsing = [ '4 8', '........', '....*...', '...**...', '........' ];
        expect(AreaValidator.valid(firstStepOfParsing)).toBe(true)
    });

    test("it should return false - height is invalid", () => {
        const firstStepOfParsing = [ '8 8', '........', '....*...', '...**...', '........' ];
        expect(AreaValidator.valid(firstStepOfParsing)).toBe(false)
    });

    test("it should return false - width is invalid", () => {
        const firstStepOfParsing = [ '8 2', '........', '....*...', '...**...', '........' ];
        expect(AreaValidator.valid(firstStepOfParsing)).toBe(false)
    });
});