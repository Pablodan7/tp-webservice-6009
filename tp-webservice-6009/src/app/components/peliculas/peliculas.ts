import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasService } from '../../services/peliculas';
@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css'
})
export class Peliculas implements OnInit {

  peliculas: any[] = [];

  cargando = true;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {

    this.obtenerPeliculas();

  }

  obtenerPeliculas() {

    this.cargando = true;

    this.peliculasService.obtenerPeliculas()
      .subscribe({

        next: (data: any) => {

          this.peliculas = data;

          this.cargando = false;

        },

        error: (error) => {

          console.log(error);

          this.cargando = false;

        }

      });

  }

}