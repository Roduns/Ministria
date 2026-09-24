import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multimedia.html',
  styleUrl: './multimedia.css'
})
export class Multimedia {

  titulo = '';

  contenido = '';

  archivos: any[] = [];

  constructor(
    private servicioService: ServicioService
  ) {}

  agregarAnuncioAlServicio() {

    if (
      !this.titulo.trim() &&
      !this.contenido.trim()
    ) {
      return;
    }

    this.servicioService.agregarElemento({

      tipo: 'anuncio',

      titulo: this.titulo,

      contenido: this.contenido

    });

    alert(
      'Anuncio añadido al servicio'
    );

  }

  seleccionarArchivo(event: any) {

    const archivo =
      event.target.files[0];

    if (!archivo) {
      return;
    }

    const lector =
      new FileReader();

    lector.onload = () => {

      const tipo =
        archivo.type.startsWith('video')
          ? 'video'
          : 'imagen';

      this.archivos.push({

        nombre: archivo.name,

        tipo: tipo,

        url: lector.result

      });

    };

    lector.readAsDataURL(archivo);

    event.target.value = '';

  }

  agregarArchivoAlServicio(archivo: any) {

    this.servicioService.agregarElemento({

      tipo: archivo.tipo,

      nombre: archivo.nombre,

      url: archivo.url

    });

    alert(
      'Elemento añadido al servicio'
    );

  }

  eliminarArchivo(index: number) {

    this.archivos.splice(
      index,
      1
    );

  }

  subirArchivo(index: number) {

    if (index === 0) {
      return;
    }

    const temporal =
      this.archivos[index];

    this.archivos[index] =
      this.archivos[index - 1];

    this.archivos[index - 1] =
      temporal;

  }

  bajarArchivo(index: number) {

    if (
      index === this.archivos.length - 1
    ) {
      return;
    }

    const temporal =
      this.archivos[index];

    this.archivos[index] =
      this.archivos[index + 1];

    this.archivos[index + 1] =
      temporal;

  }

}