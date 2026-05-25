import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosService } from '../../services/autos';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.html',
  styleUrls: ['./autos.css']   // 🔥 ojo: era styleUrl, debe ser styleUrls
})
export class Autos implements OnInit {

  marcas: any[] = [];
  modelos: any[] = [];
  marcaSeleccionada = '';

  constructor(private autosService: AutosService) {}

  ngOnInit(): void {
    this.autosService.obtenerMarcas()
      .subscribe((data: any) => {
        console.log('Respuesta de marcas:', data);
        // según la API puede venir como { brands: [...] }
        this.marcas = data.brands || data || [];
      });
  }

  verModelos(marca: string): void {
    this.marcaSeleccionada = marca;
    this.autosService.obtenerModelos(marca)
      .subscribe((data: any) => {
        console.log('Respuesta de modelos:', data);
        // según la API puede venir como { models: [...] }
        this.modelos = data.models || data || [];
      });
  }
}
