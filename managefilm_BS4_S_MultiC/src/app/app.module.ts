import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './dropdown.directive';
import { AppComponent } from './app.component';
import {AttoreComponent} from './attore/attore.component';
import { ServiceDbfilmService } from '../Services/service-dbfilm.service';
import { AttoreDetailsComponent } from './attore/attore-details/attore-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from './app-routing.module'; 
import { HeaderComponent } from './header/header.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AttoreFilmComponent } from './attore-film/attore-film.component';
import { AuthGuard } from './_guards/auth.guards';
import { LoginComponent } from './login/index';
import { AlertService, AuthenticationService } from './_services/index';


@NgModule({
  declarations: [
    
    DropdownDirective,
    AppComponent,
    AttoreComponent,
    HeaderComponent,
    AttoreDetailsComponent,
    PaginationComponent,
    FilmComponent,
    HomeComponent,
    AttoreFilmComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    ReactiveFormsModule, 
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule 
  ],
  providers: [
    ServiceDbfilmService,
    AuthGuard,
    AuthenticationService
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule  { 

}
