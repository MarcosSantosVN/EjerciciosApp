import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { CalculadoraComponent } from './page/calculadora/calculadora.component';
import { TareasComponent } from './page/tareas/tareas.component';
import { CuentaComponent } from './components/calculadora/cuenta/cuenta.component';
import { HistorialComponent } from './components/calculadora/historial/historial.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    CalculadoraComponent,
    TareasComponent,
    CuentaComponent,
    HistorialComponent,
    TareasComponent,
    LayoutPageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule
  ]
})
export class EjerciciosModule { }
