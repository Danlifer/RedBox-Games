import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideogameDetailComponent } from './videogame-detail/videogame-detail.component';
import { VideogameHomeComponent } from './videogame-home/videogame-home.component';
import { VideogameSearchComponent } from './videogame-search/videogame-search.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { WebLateralMenuComponent } from './web-lateral-menu/web-lateral-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    VideogameDetailComponent,
    VideogameHomeComponent,
    VideogameSearchComponent,
    MainMenuComponent,
    WebHeaderComponent,
    WebFooterComponent,
    WebLateralMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
