import { Component, OnInit } from '@angular/core';
import { VideogameHomeComponent } from '../../videogame-home.component';

@Component({
  selector: 'videogame-filter',
  templateUrl: './videogame-filter.component.html',
  styleUrls: ['./videogame-filter.component.css']
})
export class VideogameFilterComponent implements OnInit {

  constructor(private videogameHome:VideogameHomeComponent) { }
  
  public setFilterByName(){
    this.videogameHome.setFilter(1);
  }

  public setFilterByYear(){
    this.videogameHome.setFilter(2);
  }

  public setFilterByCompany(){
    this.videogameHome.setFilter(3);
  }

  
  ngOnInit(): void {

  }

}
