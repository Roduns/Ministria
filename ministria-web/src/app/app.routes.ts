import { Routes } from '@angular/router';

import { Biblia } from './pages/biblia/biblia';
import { Servicio } from './pages/servicio/servicio';
import { Alabanzas } from './pages/alabanzas/alabanzas';
import { Multimedia } from './pages/multimedia/multimedia';
import { Proyeccion } from './pages/proyeccion/proyeccion';

export const routes: Routes = [

  {
    path: '',
    component: Biblia
  },

  {
    path: 'alabanzas',
    component: Alabanzas
  },

  {
    path: 'multimedia',
    component: Multimedia
  },

  {
    path: 'servicio',
    component: Servicio
  },

  {
    path: 'proyeccion',
    component: Proyeccion
  }

];