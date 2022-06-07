import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { VideogameDetailComponent } from '../videogame-detail/videogame-detail.component';
import { VideogameHomeComponent } from '../videogame-home/videogame-home.component';

const routes: Routes = [
  { path: 'detail/:id', component: VideogameDetailComponent },
  { path: 'home', component:  MainMenuComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'list', component:  VideogameHomeComponent},
  { path: '**',  component: VideogameHomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
