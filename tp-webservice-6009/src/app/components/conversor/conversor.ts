import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorService } from '../../services/conversor';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css'
})
export class Conversor {

  cantidad = 1;

  monedaOrigen = 'USD';
  monedaDestino = 'ARS';

  resultado: any;

  constructor(private conversorService: ConversorService) {}

  convertir() {

    this.conversorService.convertir(
      this.monedaOrigen,
      this.monedaDestino,
      this.cantidad
    ).subscribe((data: any) => {

      this.resultado = data.result;

    });

  }
  limpiarResultado() {

  this.resultado = null;

  }

}