const fs = require('fs');
const getSucceedingGeneration = require('../src/getSucceedingGeneration.js');

test.each([
    [fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8'), fs.readFileSync(__dirname + '/examples/example01-output.txt', 'utf8')],
])('if the second generation is valid', (initialGenerationConfig, expectedOutput) => {
    expect(getSucceedingGeneration(initialGenerationConfig, 1)).toBe(expectedOutput);
});
