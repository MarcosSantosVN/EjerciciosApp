import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ejercicos',
    loadChildren: () => import('./ejercicios/ejercicios.module').then(m => m.EjerciciosModule)
  },
  {
    path: '**',
    redirectTo: 'ejercicos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
