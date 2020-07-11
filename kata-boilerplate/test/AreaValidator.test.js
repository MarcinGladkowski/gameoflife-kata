const fs = require('fs')
const AreaValidator = require('../src/AreaValidator.js')

describe("Area validator", () => {

    const input = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
    const parsedArea = [ [ '.', '.', '.', '.', '.', '.', '.', '.' ],
    [ '.', '.', '.', '.', '*', '.', '.', '.' ],
    [ '.', '.', '.', '*', '*', '.', '.', '.' ],
    [ '.', '.', '.', '.', '.', '.', '.', '.' ] ]

    test("it should return true", () => {
        expect(AreaValidator.valid(input, parsedArea)).toBe(true)
    });

    // test("it should return false - height is invalid", () => {
    //     const firstStepOfParsing = [ '8 8', '........', '....*...', '...**...', '........' ];
    //     expect(AreaValidator.valid(firstStepOfParsing)).toBe(false)
    // });

    // test("it should return false - width is invalid", () => {
    //     const firstStepOfParsing = [ '8 2', '........', '....*...', '...**...', '........' ];
    //     expect(AreaValidator.valid(firstStepOfParsing)).toBe(false)
    // });
});