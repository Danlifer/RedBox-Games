import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videogame } from '../models/videogame';
import { VideogameService } from '../services/videogame.service';

@Component({
  selector: 'videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.css']
})

export class VideogameDetailComponent implements OnInit {

  videogame?: Videogame;

  constructor(
    private route: ActivatedRoute,
    private videogameService: VideogameService
            ) { }

  ngOnInit(): void {
    this.getVideogame();
  }

  getVideogame(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.videogameService.getVideogame(id)
      .subscribe(videogame => this.videogame = videogame);
    }
}
