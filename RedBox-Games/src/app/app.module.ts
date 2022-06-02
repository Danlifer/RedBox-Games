import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideogameDetailComponent } from './videogame-detail/videogame-detail.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { VideogameSearchComponent } from './videogame-search/videogame-search.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideogameDetailComponent,
    VideogameListComponent,
    VideogameSearchComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
