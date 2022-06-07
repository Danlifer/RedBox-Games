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

  getVideogame(id: number): Observable<Videogame> {
    const url = `${this.VideogamesUrl}/${id}`;
    
    return this.http.get<Videogame>(url);
    }

  getVideogames(): Observable<Videogame[]> {
    return this.http.get<Videogame[]>(this.VideogamesUrl);
  }

  searchVideogames(term: string): Observable<Videogame[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Videogame[]>(`${this.VideogamesUrl}/?name=${term}`);
  }


}
