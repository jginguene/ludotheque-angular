
import {GameStatus} from "../model/GameStatus";

export class GameService {  
    games = [
    {
      name: 'Splendor',
      status: GameStatus.Disponible,
      id: 1
    },
    {
      name: 'Saboteur',
      status: GameStatus.Disponible,
      id: 2
    },
    {
      name: 'Seven Wonders',
      status: GameStatus.Indisponible,
      id: 3
    }
  ]; 

  findById( id: number){
    for(let game of this.games) {
        if (game.id == id){
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