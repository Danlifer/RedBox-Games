import { Component, OnInit } from '@angular/core';
import { Videogame } from '../videogame';
import { VideogameService } from '../videogame.service'

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
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
