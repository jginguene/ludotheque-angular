import { Component, Input, OnInit } from '@angular/core';
import { GameService } from "./services/game.service";  
import {GameStatus} from "./model/GameStatus";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  isAuth = false;

  lastUpdate = new Date();

  games: any[];


  constructor(private gameService: GameService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {    
    this.games=this.gameService.games;
    
  }

  onAllAvailable() {
    for (let game of this.games) {
      game.status = 'Disponible';
    }
  }

  onAllUnavailable() {
    for (let game of this.games) {
      game.status = 'Indisponible';
    }
  }
}
