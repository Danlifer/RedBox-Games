import { Component, Injectable, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';
import { VideogameService } from '../services/videogame.service'
import { VideogameListComponent } from './components/videogame-list/videogame-list.component';

@Component({
  selector: 'app-videogame-home',
  templateUrl: './videogame-home.component.html',
  styleUrls: ['./videogame-home.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class VideogameHomeComponent implements OnInit {

  videogames : Videogame[]=[];
  filter : number=1;
  constructor(private videogameService:VideogameService,private videogameList: VideogameListComponent) { }

  ngOnInit(): void {
    this.getData();
    // this.videogameList.setVideogames(this.getData());
  }

  public getVideogames(){
    return this.videogames; 
  }

  public setFilter(filter:number){
    this.filter=filter;
  }

  public setVideogames(videogames:Videogame[]){
    this.videogames=videogames;
  }

  getData() {
    //return this.videogameService.getVideogames(); 
    this.videogameService.getVideogames()
        .subscribe(videogames => this.videogames = videogames);
  }
}
