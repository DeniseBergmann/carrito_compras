import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'principal',
    loadComponent: () => import('./principal/principal.page').then ( m => m.PrincipalPage)
  },
  {
    path: 'lista-productos',
    loadComponent: () => import('./lista-productos/lista-productos.page').then( m => m.ListaProductosPage)
  }
];
