import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  elementos: any[] = [];

  agregarElemento(elemento: any) {

    console.log('Añadiendo:', elemento);

    this.elementos.push(elemento);

    console.log('Lista actual:', this.elementos);

  }

  obtenerElementos() {

    console.log('Obteniendo:', this.elementos);

    return this.elementos;

  }

}