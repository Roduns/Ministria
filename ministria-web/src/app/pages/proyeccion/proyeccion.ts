import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-proyeccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyeccion.html',
  styleUrl: './proyeccion.css'
})
export class Proyeccion {

  elementos: any[] =
    JSON.parse(
      localStorage.getItem('servicio') || '[]'
    );

  indiceActual = 0;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  siguiente() {

    if (
      this.indiceActual <
      this.elementos.length - 1
    ) {
      this.indiceActual++;
    }

  }

  anterior() {

    if (
      this.indiceActual > 0
    ) {
      this.indiceActual--;
    }

  }

  get elementoActual() {

    return this.elementos[
      this.indiceActual
    ];

  }

  obtenerYoutubeUrl(
    url: string
  ): SafeResourceUrl {

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
        url.split('youtu.be/')[1];

    }

    return this.sanitizer
      .bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}`
      );

  }

}
