import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Videogame } from 'src/app/models/videogame';

@Component({
  selector: 'videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent implements OnInit,OnChanges {
  @Input() filter:number=1;
  @Input() videogames:Videogame[]=[];
  

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
    
      this.filter=changes['filter'].currentValue;
      this.filterArray();
    
    
  }

  ngOnInit(): void {
  setTimeout(()=>this.filterArray(),500);
  }  
  
public filterArray(){
  switch (this.filter){
    case 1:
      this.filterByName();
      break;
    case 2:
      this.filterByYear();
      break;
    case 3:
      this.filterByCompany();
      break;
  }
}

  public filterByName(){
    this.videogames.sort(function(a, b){
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
  }

  public filterByYear(){
    this.videogames.sort(function(a, b){
    var yearA = a.year;
    var yearB = b.year;

    return yearA-yearB;
    })
  }
  
  public filterByCompany(){
    this.videogames.sort(function(a, b){
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
  }

}
