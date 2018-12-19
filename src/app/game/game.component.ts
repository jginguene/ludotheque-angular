import { Component, Input, OnInit } from '@angular/core';
import { GameService } from "../services/game.service";
import {GameStatus} from "../model/GameStatus";
import {Game} from "../model/Game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

  GameStatus = GameStatus;
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onSwitch() {
    if(this.game.status == GameStatus.Indisponible) {
      this.gameService.availableOnOne(this.game.id);
    } else if(this.game.status == GameStatus.Disponible) {
      this.gameService.unavailableOnOne(this.game.id);
    }
  }
}
