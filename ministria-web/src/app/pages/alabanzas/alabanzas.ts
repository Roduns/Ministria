import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-alabanzas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alabanzas.html',
  styleUrl: './alabanzas.css'
})
export class Alabanzas {

  urlCancion = '';

  canciones: string[] = [];

  constructor(
    private servicioService: ServicioService
  ) {}

  agregarCancion() {

    if (!this.urlCancion.trim()) {
      return;
    }

    this.canciones.push(
      this.urlCancion
    );

    this.urlCancion = '';

  }

  agregarAlServicio(url: string) {

    let videoId = '';

    if (url.includes('watch?v=')) {

      videoId =
        url
          .split('watch?v=')[1]
          .split('&')[0];

    } else if (
      url.includes('youtu.be/')
    ) {

      videoId =
        url
          .split('youtu.be/')[1]
          .split('?')[0];

    }

    this.servicioService.agregarElemento({

      tipo: 'youtube',

      videoId: videoId,

      urlCancion: url

    });

    alert(
      'Alabanza añadida al servicio'
    );

  }

  eliminarCancion(index: number) {

    this.canciones.splice(
      index,
      1
    );

  }

  proyectar(url: string) {

    window.open(
      url,
      '_blank'
    );

  }

  subirCancion(index: number) {

    if (index === 0) {
      return;
    }

    const temporal =
      this.canciones[index];

    this.canciones[index] =
      this.canciones[index - 1];

    this.canciones[index - 1] =
      temporal;

  }

  bajarCancion(index: number) {

    if (
      index ===
      this.canciones.length - 1
    ) {
      return;
    }

    const temporal =
      this.canciones[index];

    this.canciones[index] =
      this.canciones[index + 1];

    this.canciones[index + 1] =
      temporal;

  }

}