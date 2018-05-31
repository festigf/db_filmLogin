import { Component,OnInit } from '@angular/core';
import {Attore } from '../Types_dbfilm/Attore';
import {ServiceDbfilmService} from '../Services/service-dbfilm.service';
import { FilmComponent } from './film/film.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){}
  loadedFeature = 'film';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
 }
