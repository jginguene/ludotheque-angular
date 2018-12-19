import { Component, Input, OnInit } from '@angular/core';
import {GameStatus} from "./model/GameStatus";
import { Game } from './model/Game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  isAuth = false;


  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {    
    
  }

 
}
