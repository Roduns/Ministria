import { ServicioService } from '../../services/servicio.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biblia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './biblia.html',
  styleUrl: './biblia.css'
})
export class Biblia {

  referencia = '';
  resultado = '';

  constructor(
    private servicioService: ServicioService
  ) {}

  async buscarVersiculo() {

    try {

      const referenciaLimpia =
        this.referencia.trim();

      const partes =
        referenciaLimpia.split(' ');

      if (partes.length < 2) {

        this.resultado =
          'Formato incorrecto. Ejemplo: Juan 3:16';

        return;
      }

      const libro =
        partes[0].toLowerCase();

      const capVers =
        partes[1].split(':');

      const capitulo =
        capVers[0];

      const versiculo =
        capVers[1];

      const url =
        `https://evanbible.com/api/v1/rv60/${libro}/${capitulo}/${versiculo}`;

      const respuesta =
        await fetch(url);

      const datos =
        await respuesta.json();

      if (
        datos.ok &&
        datos.verses &&
        datos.verses.length > 0
      ) {

        this.resultado =
          datos.verses[0].text;

      } else {

        this.resultado =
          'Versículo no encontrado';

      }

    } catch {

      this.resultado =
        'Error consultando la Biblia';

    }

  }

  agregarAlServicio() {

    if (!this.resultado) {
      return;
    }

    this.servicioService.agregarElemento({

      tipo: 'versiculo',

      referencia: this.referencia,

      texto: this.resultado

    });

    alert(
      'Versículo añadido al servicio'
    );

  }

  abrirAlabanzas() {

    window.open(
      window.location.origin + '/alabanzas',
      '_blank'
    );

  }

  abrirMultimedia() {

    window.open(
      window.location.origin + '/multimedia',
      '_blank'
    );

  }

}