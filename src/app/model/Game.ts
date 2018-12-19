import { GameStatus } from "./GameStatus";

export class Game {

     name: string = '';
     status: GameStatus = GameStatus.Enabled;
     id: number  ;

     constructor(aId: number, aName: string, aStatus:GameStatus ) { 
        this.id = aId; 
        this.status = aStatus; 
         this.name = aName; 
    }
} 