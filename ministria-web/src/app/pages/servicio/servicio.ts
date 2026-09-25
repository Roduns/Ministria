import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio.html',
  styleUrl: './servicio.css'
})
export class Servicio {

  constructor(
    public servicioService: ServicioService
  ) {

    this.servicioService.obtenerElementos();

  }

  subir(index: number) {

    if (index === 0) {
      return;
    }

    const elementos =
      this.servicioService.elementos;

    [
      elementos[index],
      elementos[index - 1]
    ] = [
      elementos[index - 1],
      elementos[index]
    ];

    this.servicioService.actualizar();

  }

  bajar(index: number) {

    const elementos =
      this.servicioService.elementos;

    if (
      index === elementos.length - 1
    ) {
      return;
    }

    [
      elementos[index],
      elementos[index + 1]
    ] = [
      elementos[index + 1],
      elementos[index]
    ];

    this.servicioService.actualizar();

  }

  eliminar(index: number) {

    this.servicioService.eliminarElemento(
      index
    );

  }

  proyectarServicio() {

    window.open(
      window.location.origin + '/proyeccion',
      '_blank'
    );

  }

}