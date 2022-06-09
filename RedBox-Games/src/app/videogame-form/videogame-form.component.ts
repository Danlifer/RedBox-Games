import { Component, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';
import { VideogameService } from '../services/videogame.service';

@Component({
  selector: 'videogame-form',
  templateUrl: './videogame-form.component.html',
  styleUrls: ['./videogame-form.component.css']
})
export class VideogameFormComponent implements OnInit {

  videogames: Videogame[] = [];
  public videogame?: Videogame;

  constructor(private videogameService: VideogameService) { }

  ngOnInit(): void {
    this.videogameService.getVideogames().subscribe(videogames => this.videogames = videogames);
  }

  add(name: string, year: string, company: string, detail: string, img: string): void{


    var videogameObj: Videogame = {
      id: ++this.videogames.length,
      name: name,
      year: parseInt(year),
      company: company,
      detail: detail,
      img: img
    };

    console.log(videogameObj);

    this.videogameService.addVideogame(videogameObj)
      .subscribe(videogame=> {
        this.videogames.push(videogame);
      });
  }

}
