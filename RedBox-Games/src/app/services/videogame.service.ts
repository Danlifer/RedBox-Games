import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Videogame } from '../models/videogame';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  VideogamesUrl='api/Videogames'

  constructor(private http:HttpClient) { }

  getVideogames(): Observable<Videogame[]> {
    return this.http.get<Videogame[]>(this.VideogamesUrl);
  }
}
