import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  apiKey = 'd6cde3419dmshd5dfa03e5afeaefp191866jsnc38f158a35be';

  constructor(private http: HttpClient) {}

  obtenerMarcas() {

    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'car-specs.p.rapidapi.com'
    });

    return this.http.get(
      'https://car-specs.p.rapidapi.com/v2/cars/makes',
      { headers }
    );

  }

  obtenerModelos(marca: string) {

    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'car-specs.p.rapidapi.com'
    });

    return this.http.get(
      `https://car-specs.p.rapidapi.com/v2/cars/make/${marca}`,
      { headers }
    );

  }

}