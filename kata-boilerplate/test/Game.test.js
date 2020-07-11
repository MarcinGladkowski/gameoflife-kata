const fs = require('fs')
const Game = require('../src/Game.js')
const AreaValidator = require('../src/AreaValidator.js')
const AreaParser = require('../src/AreaParser.js')

describe("Game", () => {
    
    const parsedArea = [ 
        [ '.', '.', '.', '.', '.', '.', '.', '.' ],
        [ '.', '.', '.', '.', '*', '.', '.', '.' ],
        [ '.', '.', '.', '*', '*', '.', '.', '.' ],
        [ '.', '.', '.', '.', '.', '.', '.', '.' ] 
    ]

    test("it should return initial step", () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.steps.length).toBe(1);
    });

    test("it should return initial step", () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.steps.length).toBe(1);
    });

    test('test should return neighbours for cell', () => {

        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);

        expect(game.getCellNeighbors(0, 0, parsedArea)).toEqual(['.','.','.'])

    });
});