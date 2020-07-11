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

    steps() {
        return this.steps;
    }
} 

module.exports = Game;