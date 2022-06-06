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
    console.log(filter);
    this.filter=filter;
    this.videogames=Object.assign({},this.filterArray());
    this.videogames=Object.values(this.videogames);
  }

  filterVideogames() {
    
  }

  public setVideogames(videogames:Videogame[]){
    this.videogames=videogames;
  }

  getData() {
    //return this.videogameService.getVideogames(); 
    this.videogameService.getVideogames()
        .subscribe(videogames => this.videogames = videogames);
  }

  public filterArray(){
    var aux : Videogame[]=[];
    switch (this.filter){
      case 1:
        aux=this.filterByName();
        break;
      case 2:
        aux=this.filterByYear();
        break;
      case 3:
        aux=this.filterByCompany();
        break;
    }
    //console.log(aux);
    return aux;
  }
  
    public filterByName(){
      var aux=Object.assign({},this.videogames);
      aux=Object.values(aux);
      aux.sort(function(a, b){
      var nameA = a.name;
      var nameB = b.name;
      
      if(nameA < nameB){
        return -1;
      }
  
      if(nameA > nameB){
        return 1;
      }
        return 0;
      })
      return aux;
    }
  
    public filterByYear(){
      var aux=Object.assign({},this.videogames);
      aux=Object.values(aux);
      aux.sort(function(a, b){
      var yearA = a.year;
      var yearB = b.year;
  
      return yearA-yearB;
      })
      return aux;
    }
    
    public filterByCompany(){
      var aux=Object.assign({},this.videogames);
      aux=Object.values(aux);
      aux.sort(function(a, b){
      var nameA = a.company;
      var nameB = b.company;
      
      if(nameA < nameB){
        return -1;
      }
      if(nameA > nameB){
        return 1;
      }
        return 0;
      })
      return aux;
    }
}
