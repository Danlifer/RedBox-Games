import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Videogame } from 'src/app/models/videogame';

@Component({
  selector: 'videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent implements OnInit,OnChanges {
  @Input() videogames:Videogame[]=[];
  

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      this.videogames=changes['videogames'].currentValue;
  }

  ngOnInit(): void {
  }  
  

}
