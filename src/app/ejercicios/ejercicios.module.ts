import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { CalculadoraComponent } from './page/calculadora/calculadora.component';
import { TareasComponent } from './page/tareas/tareas.component';
import { CuentaComponent } from './components/calculadora/cuenta/cuenta.component';
import { HistorialComponent } from './components/calculadora/historial/historial.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { ListaTareaComponent } from './components/tareas/lista-tarea/lista-tarea.component';
import { ListaTareaItemComponent } from './components/tareas/lista-tarea-item/lista-tarea-item.component';
import { TareaFormComponent } from './components/tareas/tarea-form/tarea-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculadoraComponent,
    TareasComponent,
    CuentaComponent,
    HistorialComponent,
    TareasComponent,
    LayoutPageComponent,
    SidebarComponent,
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
