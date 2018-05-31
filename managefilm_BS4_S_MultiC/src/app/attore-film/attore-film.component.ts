import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Attore } from '../../Types_dbfilm/Attore';

@Component({
  selector: 'app-attore-film',
  templateUrl: './attore-film.component.html',
  styleUrls: ['./attore-film.component.css']
})
export class AttoreFilmComponent implements OnInit {
  attore:Attore;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
          this.attore =  JSON.parse(params['attore']);
          console.log(this.attore.nome);
        }
      );
    }
}
