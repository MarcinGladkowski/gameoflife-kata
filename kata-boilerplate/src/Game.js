const AreaParser = require('../src/AreaParser')
const AreaValidator = require('../src/AreaValidator')
const CellType = require('../src/CellType');

class Game {
    /**
     * @param {AreaParser} areaParser 
     * @param {AreaValidator} areaValidator 
     */
    constructor(areaParser, areaValidator, initArea) {
        this.areaParser = areaParser;
        this.areaValidator = areaValidator;
        this.steps = [];
        this.init(initArea)
    }

    init(initArea) {
        const parsedArea = this.areaParser.parse(initArea);
        if(!AreaValidator.valid(initArea, parsedArea)) {
            throw Error('Initial area is invalid!');
        }

        this.steps.push(parsedArea)
    }

    evolveByNGenerations(n = 1) {
        for(let i = n; i <= n; i++) {
            this.nextGeneration()
        }
    }

    nextGeneration() {
        const previousStep = this.steps[this.steps.length - 1];

        let nextStep = this.deepCopy(previousStep)

        for(let x = 0; x < previousStep.length; x++) {
            for(let y = 0; y < previousStep[x].length; y++) {
                nextStep[x][y] = this.decide(this.getCellNeighbors(x, y, previousStep), previousStep[x][y])
            }
        }
        this.steps.push(nextStep);

        return this;
    }

    deepCopy(object) {
        return JSON.parse(JSON.stringify(object));
    }

    /**
     * @param {array} area 
     */
    consoleOutputFormat(area) {
        let output = '';
        for(let row of area) {
            output += row.join('')+'\r\n'
        }
        return output.trim();
    }

    getCellNeighbors(x, y, passedArea) {

        let area = [...passedArea]


        const neighbors = []
        if (isUndefined(area[x-1])) {
            if (isUndefined(area[x-1][y-1])) neighbors.push(area[x-1][y-1])
            if (isUndefined(area[x-1][y])) neighbors.push(area[x-1][y])
            if (isUndefined(area[x-1][y+1])) neighbors.push(area[x-1][y+1])
        }
        
        if (isUndefined(area[x][y-1])) neighbors.push(area[x][y-1])
        if (isUndefined(area[x][y+1])) neighbors.push(area[x][y+1])

        if (isUndefined(area[x+1])) {
            if (isUndefined(area[x+1][y-1])) neighbors.push(area[x+1][y-1])
            if (isUndefined(area[x+1][y])) neighbors.push(area[x+1][y])
            if (isUndefined(area[x+1][y+1])) neighbors.push(area[x+1][y+1])
        }
      
        function isUndefined(value) {
            return typeof(value) != 'undefined'
        }

        return neighbors;
    }

    /**
     * @param {array} neighbors 
     * @param {string} cell 
     * @returns {string} cell
     */
    decide(neighbors, cell) {
        const liveCells = this.getLiveNeighbors(neighbors)
        
        // pass to rules module as callbacks/functions
        if (cell === CellType.LIVE && (liveCells < 2 || liveCells > 3)) {
            return CellType.DEAD;
        }

        if (cell === CellType.LIVE && (liveCells === 2 || liveCells === 3)) {
            return CellType.LIVE;
        }

        if (cell === CellType.DEAD && liveCells === 3) {
            return CellType.LIVE;
        }
        return cell;
    }
    
      /**
     * @param {array} neighbors 

     */
    getDeadNeighbors(neighbors) {
        return neighbors.filter((neighbor) => neighbor === CellType.DEAD).length
    }

     /**
     * @param {array} neighbors 
     */
    getLiveNeighbors(neighbors) {
        return neighbors.filter((neighbor) => neighbor === CellType.LIVE).length
    }

    steps() {
        return this.steps;
    }

    step(index) {
        return this.steps[index];
    }
} 

module.exports = Game;