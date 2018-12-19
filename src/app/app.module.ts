import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { GameViewComponent } from './game-view/game-view.component'; 

import { GameService } from "./services/game.service";
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AuthComponent,
    GameViewComponent
  ],
  imports: [
    BrowserModule,
    //FontAwesomeModule
    FormsModule,
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
