import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { CalculadoraComponent } from './page/calculadora/calculadora.component';
import { TareasComponent } from './page/tareas/tareas.component';
import { ListaTareaComponent } from './components/tareas/lista-tarea/lista-tarea.component';
import { ListaTareaItemComponent } from './components/tareas/lista-tarea-item/lista-tarea-item.component';
import { TareaFormComponent } from './components/tareas/tarea-form/tarea-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculadoraComponent,
    TareasComponent,
    ListaTareaComponent,
    ListaTareaItemComponent,
    TareaFormComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EjerciciosModule { }
