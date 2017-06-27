///<reference path="wildBattle/routeHelper.ts"/>

document.addEventListener("DOMContentLoaded", function (event) {
    let game: Game = new Game();
    game.start()
});
class Game {
    interval: number;
    battleCounter: number;
    undergroundCounter: number;
    farmCounter: number;

    constructor() {

    }

    start() {
        this.load();
        this.interval = setInterval(this.gameTick(), gameConstants.TICK_TIME);
    }

    stop() {
        clearTimeout(this.interval);
    }

    gameTick() {
        // Update tick counters
        this.battleCounter += gameConstants.TICK_TIME;
        this.undergroundCounter += gameConstants.TICK_TIME;
        this.farmCounter += gameConstants.TICK_TIME;

        if(this.battleCounter > gameConstants.BATTLE_TICK){
            this.battleCounter = 0;
        }
        console.log(pokemonFactory.generateWildPokemon(1, gameConstants.Regions.kanto));
    }

    save() {

    }

    load() {

    }
}
