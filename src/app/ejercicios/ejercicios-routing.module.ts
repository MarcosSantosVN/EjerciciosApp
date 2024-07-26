import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './page/calculadora/calculadora.component';
import { TareasComponent } from './page/tareas/tareas.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { BanderasComponent } from './page/banderas/banderas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'calc',
        component: CalculadoraComponent
      },
      {
        path: 'tarea',
        component: TareasComponent
      },
      {
        path: 'banderas',
        component: BanderasComponent
      },
      {
        path: '**',
        redirectTo: 'calc'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
