import { Routes } from '@angular/router';

import { Biblia } from './pages/biblia/biblia';
import { Servicio } from './pages/servicio/servicio';
import { Alabanzas } from './pages/alabanzas/alabanzas';

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
    path: 'servicio',
    component: Servicio
  }

];