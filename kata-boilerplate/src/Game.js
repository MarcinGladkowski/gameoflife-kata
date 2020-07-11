const AreaParser = require('../src/AreaParser')
const AreaValidator = require('../src/AreaValidator')

class Game {
    /**
     * @param {AreaParser} areaParser 
     * @param {AreaValidator} areaValidator 
     */
    constructor(areaParser, areaValidator) {
        this.areaParser = areaParser;
        this.areaValidator = areaValidator;
    }

    nextGeneration(initArea) {
        const parsedArea = this.areaParser.parse(initArea);
        const area = AreaValidator.valid(parsedArea)
        // create next generation
        
    }
} 

module.exports = Game;