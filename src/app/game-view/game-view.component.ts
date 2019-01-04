import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../model/Game';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  games: Game[];

  lastUpdate = new Date();

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.games;
  }

  onEnableAll() {
    this.gameService.enableAll();
  }

  onDisableAll() {
    if(confirm('Etes-vous sûr de vouloir rendre indisponible tous les jeux ?')) {
      this.gameService.disableAll();
      return 1;
    } else {
      return null;
    }
  }

}
