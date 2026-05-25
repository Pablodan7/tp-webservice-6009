import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  apiKey = 'd6cde3419dmshd5dfa03e5afeaefp191866jsnc38f158a35be';

  constructor(private http: HttpClient) {}

  obtenerPeliculas() {

    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    });

    return this.http.get(
      'https://imdb-top-100-movies.p.rapidapi.com/',
      { headers }
    );

  }

}