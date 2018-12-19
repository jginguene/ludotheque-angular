
import { GameStatus } from "../model/GameStatus";
import { OnInit } from "@angular/core";
import { Game } from "../model/Game";

export class GameService {

    games: Array<Game>;

    constructor( ){
        console.log('constructor :');
        this.games = new Array<Game>();
        this.games.push(new Game(1, 'Splendor', GameStatus.Enabled));
        this.games.push(new Game(2, 'Saboteur', GameStatus.Enabled));
        this.games.push(new Game(3, 'Seven Wonders', GameStatus.Disabled));
     
    }

    




    findById(id: number): Game {
        for (let game of this.games) {
         console.log('game :' + game.name);
         
            if (game.id == id) {
                return game;
            }
        }
    }

    enable(id: number) {
        this.findById(id).status = GameStatus.Enabled;
    }

    disable(id: number) {
        this.findById(id).status = GameStatus.Disabled;
    }

    enableAll() {
        for (let game of this.games) {
          game.status = GameStatus.Enabled;
        }
      }
    
    disableAll() {
        for (let game of this.games) {
          game.status = GameStatus.Disabled;
        }
      }
}