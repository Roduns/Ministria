import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  elementos: any[] =
    JSON.parse(
      localStorage.getItem('servicio') || '[]'
    );

  agregarElemento(elemento: any) {

    const elementosActuales =
      JSON.parse(
        localStorage.getItem('servicio') || '[]'
      );

    elementosActuales.push(elemento);

    this.elementos = elementosActuales;

    localStorage.setItem(
      'servicio',
      JSON.stringify(elementosActuales)
    );

  }

  obtenerElementos() {

    this.elementos =
      JSON.parse(
        localStorage.getItem('servicio') || '[]'
      );

    return this.elementos;

  }

  eliminarElemento(index: number) {

    this.elementos.splice(index, 1);

    localStorage.setItem(
      'servicio',
      JSON.stringify(this.elementos)
    );

  }

  actualizar() {

    localStorage.setItem(
      'servicio',
      JSON.stringify(this.elementos)
    );

  }

  limpiar() {

    this.elementos = [];

    localStorage.removeItem(
      'servicio'
    );

  }

}
