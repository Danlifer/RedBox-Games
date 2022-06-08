import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VideogameHomeComponent } from '../../videogame-home.component';

@Component({
  selector: 'videogame-filter',
  templateUrl: './videogame-filter.component.html',
  styleUrls: ['./videogame-filter.component.css']
})
export class VideogameFilterComponent implements OnInit {

  @Output() indexFilter = new EventEmitter<number>();

  constructor() { }

  addFilter(value: number) {
    this.indexFilter.emit(value);
  }

  ngOnInit(): void {
  }
}
