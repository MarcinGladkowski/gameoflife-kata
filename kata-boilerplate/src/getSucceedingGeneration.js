const Game = require('../src/Game.js');
const AreaValidator = require('../src/AreaValidator.js')
const AreaParser = require('../src/AreaValidator.js')

function getSucceedingGeneration(initialGenerationConfig, evolveByNGenerations = 1)
{   
    const game = new Game(new AreaParser(), new AreaValidator(), initialGenerationConfig)
    return game.nextGeneration()
}

module.exports = getSucceedingGeneration;
