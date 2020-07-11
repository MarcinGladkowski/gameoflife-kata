const fs = require('fs');
const AreaParser = require('../src/AreaParser.js')

describe("Area parser", () => {

    const area = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
    const areaParser = new AreaParser()

    test("it should return array", () => {
        expect(Array.isArray(areaParser.parse(area))).toBe(true);
    });

    test("it should return multidimensional array", () => {
        expect(Array.isArray(areaParser.parse(area))).toBe(true);
    });
});