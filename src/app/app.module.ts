import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { GameComponent } from './game/game.component';

import { GameService } from "./services/game.service"; 


@NgModule({
  declarations: [
    AppComponent, 
    MonPremierComponent,
    GameComponent
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
