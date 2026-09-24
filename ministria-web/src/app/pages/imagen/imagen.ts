import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagen.html',
  styleUrl: './imagen.css'
})
export class Imagen {

  imagenes: string[] = [];

  constructor(
    private servicioService: ServicioService
  ) {}

  seleccionarImagen(event: any) {

    const archivo = event.target.files[0];

    if (!archivo) {
      return;
    }

    const lector = new FileReader();

    lector.onload = () => {

      this.imagenes.push(
        lector.result as string
      );

    };

    lector.readAsDataURL(archivo);

    event.target.value = '';

  }

  eliminarImagen(index: number) {

    this.imagenes.splice(
      index,
      1
    );

  }

  subirImagen(index: number) {

    if (index === 0) {
      return;
    }

    const temporal =
      this.imagenes[index];

    this.imagenes[index] =
      this.imagenes[index - 1];

    this.imagenes[index - 1] =
      temporal;

  }

  bajarImagen(index: number) {

    if (
      index === this.imagenes.length - 1
    ) {
      return;
    }

    const temporal =
      this.imagenes[index];

    this.imagenes[index] =
      this.imagenes[index + 1];

    this.imagenes[index + 1] =
      temporal;

  }

  agregarAlServicio(imagen: string) {

    this.servicioService.agregarElemento({

      tipo: 'imagen',

      imagen: imagen

    });

    alert(
      'Imagen añadida al servicio'
    );

  }

}