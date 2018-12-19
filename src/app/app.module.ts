import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { GameViewComponent } from './game-view/game-view.component'; 

import { GameService } from "./services/game.service";
import { AuthComponent } from './auth/auth.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'game', component: GameViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: GameViewComponent }

];

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
