const fs = require('fs')
const Game = require('../src/Game.js')
const AreaValidator = require('../src/AreaValidator.js')
const AreaParser = require('../src/AreaParser.js')
const CellType = require('../src/CellType')

describe("Game", () => {
    
    const parsedArea = [ 
        [ '.', '.', '.', '.', '.', '.', '.', '.' ],
        [ '.', '.', '.', '.', '*', '.', '.', '.' ],
        [ '.', '.', '.', '*', '*', '.', '.', '.' ],
        [ '.', '.', '.', '.', '.', '.', '.', '.' ] 
    ]

    const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
    const game = new Game(new AreaParser(), new AreaValidator(), initialArea);

    test("it should return initial step", () => {
        expect(game.steps.length).toBe(1);
    });

    test('test should return neighbors for cell', () => {
        expect(game.getCellNeighbors(0, 0, parsedArea)).toEqual(['.','.','.'])
    });

    test('test should return live neighbors cell', () => {
        expect(game.getLiveNeighbors(['.','*','*'])).toEqual(2);
    });


    test('test should dead by overcrowd', () => {
        expect(game.decide([CellType.LIVE, CellType.LIVE, CellType.LIVE, CellType.LIVE], CellType.LIVE)).toEqual(CellType.DEAD);
    });

    test('test should dead by underpopulation', () => {
        expect(game.decide([CellType.LIVE], CellType.LIVE)).toEqual(CellType.DEAD);
    });

    test('test should live to next generation', () => {
        expect(game.decide([CellType.LIVE, CellType.LIVE], CellType.LIVE)).toEqual(CellType.LIVE);
        expect(game.decide([CellType.LIVE, CellType.LIVE, CellType.LIVE], CellType.LIVE)).toEqual(CellType.LIVE);
    });

    test('test should become cell live from dead', () => {
        expect(game.decide([CellType.LIVE, CellType.LIVE, CellType.LIVE], CellType.DEAD)).toEqual(CellType.LIVE);
    });

    test('test should create next generation from custom form on start', () => {
        game.evolveByNGenerations()
        const consoleOutputFormat = game.consoleOutputFormat(game.step(1));
        const areaNextGenerationOutput = fs.readFileSync(__dirname + '/examples/example01-output.txt', 'utf8')
        expect(consoleOutputFormat).toBe(areaNextGenerationOutput);
    });


    test('test should create next generation from glider on start', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example02-input.txt', 'utf8');
        const areaNextGenerationOutput = fs.readFileSync(__dirname + '/examples/example02-output.txt', 'utf8');

        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        game.evolveByNGenerations()
        const consoleOutputFormat = game.consoleOutputFormat(game.step(1));
        
        expect(consoleOutputFormat).toBe(areaNextGenerationOutput);
    });
});