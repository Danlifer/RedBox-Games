import { Component, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';
import { VideogameService } from '../services/videogame.service'

@Component({
  selector: 'app-videogame-home',
  templateUrl: './videogame-home.component.html',
  styleUrls: ['./videogame-home.component.css']
})
export class VideogameListComponent implements OnInit {

  videogames : Videogame[]=[];

  constructor(private videogameService:VideogameService) { }

  ngOnInit(): void {
    this.getVideogames();
  }

  getVideogames(): void {
    this.videogameService.getVideogames()
        .subscribe(videogames => this.videogames = videogames);
  }

}
