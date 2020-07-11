const AreaParser = require('../src/AreaParser')
const AreaValidator = require('../src/AreaValidator')

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

    nextGeneration() {
        // create next generation
    }

    getCellNeighbors(x, y, area) {
 
        const neighbors = []
        if (isUndefined(area[x-1])) {
            if (isUndefined(area[x-1][y-1])) neighbors.push(area[x-1][y-1])
            if (isUndefined(area[x-1][y])) neighbors.push(area[x-1][y])
            if (isUndefined(area[x-1][y+1])) neighbors.push(area[x-1][y+1])
        }
        
        if (typeof(area[x][y-1]) != 'undefined') neighbors.push(area[x][y-1])
        if (typeof(area[x][y+1]) != 'undefined') neighbors.push(area[x][y+1])

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

    steps() {
        return this.steps;
    }
} 

module.exports = Game;