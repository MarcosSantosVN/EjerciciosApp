import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { CalculadoraComponent } from './page/calculadora/calculadora.component';
import { TareasComponent } from './page/tareas/tareas.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    CalculadoraComponent,
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
