import { Component, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';
import { VideogameService } from '../services/videogame.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  videogames: Videogame[] = [];

  constructor(private videogameService:VideogameService) { }

  ngOnInit(): void {
    this.getData();
    
    setTimeout(() => {
      this.videogames = this.videogames.slice(0, 4);
    }, 500);
  }

  getData() {
    //return this.videogameService.getVideogames(); 
    this.videogameService.getVideogames()
        .subscribe(videogames => this.videogames = videogames);
  }

}
