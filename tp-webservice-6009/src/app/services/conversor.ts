import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  apiKey = 'nZozqtgVlpcd6VL99OzFDpD5k1oAVjSm';

  constructor(private http: HttpClient) {}

  convertir(monedaOrigen: string, monedaDestino: string, cantidad: number) {

    const headers = new HttpHeaders({
      apikey: this.apiKey
    });

    return this.http.get(
      `https://api.apilayer.com/currency_data/convert?to=${monedaDestino}&from=${monedaOrigen}&amount=${cantidad}`,
      { headers }
    );

  }

}