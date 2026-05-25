import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Peliculas } from './components/peliculas/peliculas';
import { Conversor } from './components/conversor/conversor';
import { Autos } from './components/autos/autos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Peliculas,
    Conversor,
    Autos,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  seccion = 'peliculas';

}