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

    test('test should return neighbors for cell', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.getCellNeighbors(0, 0, parsedArea)).toEqual(['.','.','.'])
    });


    test('test should return dead neighbors cell', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.getDeadNeighbors(['.','.','.'])).toEqual(3);
    });

    test('test should return live neighbors cell', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.getLiveNeighbors(['.','*','*'])).toEqual(2);
    });


    test('test should dead by overcrowd', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.decide([CellType.LIVE, CellType.LIVE, CellType.LIVE, CellType.LIVE], CellType.LIVE)).toEqual(CellType.DEAD);
    });

    test('test should dead by underpopulation', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.decide([CellType.LIVE], CellType.LIVE)).toEqual(CellType.DEAD);
    });

    test('test should live to next generation', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.decide([CellType.LIVE, CellType.LIVE], CellType.LIVE)).toEqual(CellType.LIVE);
        expect(game.decide([CellType.LIVE, CellType.LIVE, CellType.LIVE], CellType.LIVE)).toEqual(CellType.LIVE);
    });

    test('test should become cell live from dead', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        expect(game.decide([CellType.LIVE, CellType.LIVE, CellType.LIVE], CellType.DEAD)).toEqual(CellType.LIVE);
    });

    test('test should create next generation', () => {
        const initialArea = fs.readFileSync(__dirname + '/examples/example01-input.txt', 'utf8')
        const game = new Game(new AreaParser(), new AreaValidator(), initialArea);
        const newGeneration = game.nextGeneration()
        const consoleOutputFormat = game.consoleOutputFormat(newGeneration);
        const areaNextGenerationOutput = fs.readFileSync(__dirname + '/examples/example01-output.txt', 'utf8')

        expect(consoleOutputFormat).toBe(areaNextGenerationOutput);
    });
});