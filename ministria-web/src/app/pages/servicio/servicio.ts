import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio.html',
  styleUrl: './servicio.css'
})
export class Servicio {

  pestañaActiva = 'biblia';
  cambiarPestaña(nombre: string) {
  this.pestañaActiva = nombre;
}

}