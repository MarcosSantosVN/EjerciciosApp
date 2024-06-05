import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './page/tareas/tareas.component';
import { CalculadoraComponent } from './page/calculadora/calculadora.component';

const routes: Routes = [

  {
    path: 'calc',
    component: CalculadoraComponent
  },
  {
    path: 'tarea',
    component: TareasComponent
  },
  {
    path: '**',
    redirectTo: 'calc'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
