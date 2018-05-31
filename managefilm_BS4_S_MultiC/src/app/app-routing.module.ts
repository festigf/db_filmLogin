import {NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AttoreComponent} from './attore/attore.component';
import {FilmComponent } from './film/film.component';
import { AttoreFilmComponent } from './attore-film/attore-film.component';
import { AuthGuard } from './_guards/auth.guards';
import { LoginComponent } from './login/index';

const appRoutes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'film', component: FilmComponent, canActivate: [AuthGuard] },
  { path: 'attore', component: AttoreComponent, canActivate: [AuthGuard] },
  { path: 'attorefilm/:attore'  , component: AttoreFilmComponent },
  { path: '', component: HomeComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

