import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Videogame } from './videogame';
import { VIDEOGAMES } from './mock-videogame'

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor() { }

  getVideogames(): Observable<Videogame[]> {
    const videogames = of(VIDEOGAMES);
    return videogames;
  }
}
