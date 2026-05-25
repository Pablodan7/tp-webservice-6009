import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Peliculas } from './components/peliculas/peliculas';
import { Conversor } from './components/conversor/conversor';
import { Clima } from './components/clima/clima';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Peliculas,
    Conversor,
    Clima
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  seccion = 'peliculas';

}