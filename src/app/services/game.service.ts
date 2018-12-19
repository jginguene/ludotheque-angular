
import { GameStatus } from "../model/GameStatus";
import { OnInit } from "@angular/core";
import { Game } from "../model/Game";

export class GameService {

    games: Array<Game>;

    constructor( ){
        console.log('constructor :');
        this.games = new Array<Game>();
        this.games.push(new Game(1, 'Splendor', GameStatus.Disponible));
        this.games.push(new Game(2, 'Saboteur', GameStatus.Disponible));
        this.games.push(new Game(3, 'Seven Wonders', GameStatus.Indisponible));
     
    }

    




    findById(id: number): Game {
        for (let game of this.games) {
         console.log('game :' + game.name);
         
            if (game.id == id) {
                return game;
            }
        }
    }

    availableOnOne(id: number) {
        this.findById(id).status = GameStatus.Disponible;
    }

    unavailableOnOne(id: number) {
        this.findById(id).status = GameStatus.Indisponible;
    }
}