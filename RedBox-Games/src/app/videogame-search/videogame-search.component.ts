import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Videogame } from '../models/videogame';
import { VideogameService } from '../services/videogame.service';

@Component({
  selector: 'videogame-search',
  templateUrl: './videogame-search.component.html',
  styleUrls: ['./videogame-search.component.css']
})
export class VideogameSearchComponent implements OnInit {

  videogames$!: Observable<Videogame[]>;
  private searchTerms = new Subject<string>();

  constructor(private videogameService: VideogameService) { }

  ngOnInit(): void {

    this.videogames$ = this.searchTerms.pipe(
      debounceTime(500),

      distinctUntilChanged(),

      switchMap((term: string) => this.videogameService.searchVideogames(term)),
    );
  }

  search(term: string):void{
    this.searchTerms.next(term);
    console.log(term);
  }

  onBlurEvent(event: any){
    this.searchTerms.next('');
  }
}
