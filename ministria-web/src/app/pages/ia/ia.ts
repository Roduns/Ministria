import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ia.html',
  styleUrl: './ia.css'
})
export class Ia {

  consulta = '';

  respuesta = '';

  constructor(
    private servicioService: ServicioService
  ) {}

  generar() {

    const texto =
      this.consulta.toLowerCase();

    if (texto.includes('amor')) {

      this.respuesta =
        'Juan 3:16 - Porque de tal manera amó Dios al mundo...';

    } else if (
      texto.includes('fe')
    ) {

      this.respuesta =
        'Hebreos 11:1 - Es la certeza de lo que se espera...';

    } else if (
      texto.includes('esperanza')
    ) {

      this.respuesta =
        'Romanos 15:13 - Y el Dios de esperanza os llene de gozo...';

    } else {

      this.respuesta =
        'No encontré una sugerencia para ese tema.';

    }

  }

  agregarAlServicio() {

    if (!this.respuesta) {
      return;
    }

    this.servicioService.agregarElemento({

      tipo: 'anuncio',

      titulo: 'Sugerencia IA',

      contenido: this.respuesta

    });

    alert(
      'Contenido añadido al servicio'
    );

  }

}