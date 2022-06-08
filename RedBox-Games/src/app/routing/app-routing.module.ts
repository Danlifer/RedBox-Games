import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogameDetailComponent } from '../videogame-detail/videogame-detail.component';
import { VideogameHomeComponent } from '../videogame-home/videogame-home.component';

const routes: Routes = [
  { path: 'detail/:id', component: VideogameDetailComponent },
  { path: 'home', component: VideogameHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**',  component: VideogameHomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
