import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { CalculadoraComponent } from './page/calculadora/calculadora.component';
import { TareasComponent } from './page/tareas/tareas.component';


@NgModule({
  declarations: [
    CalculadoraComponent,
    TareasComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule
  ]
})
export class EjerciciosModule { }
