import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  agregarCancion() {

    if (!this.urlCancion.trim()) {
      return;
    }

    this.canciones.push(this.urlCancion);

    this.urlCancion = '';

  }

  eliminarCancion(index: number) {

    this.canciones.splice(index, 1);

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

    if (index === this.canciones.length - 1) {
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