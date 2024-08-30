import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './page/calculadora/calculadora.component';
import { CuentaComponent } from './components/calculadora/cuenta/cuenta.component';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialComponent } from './components/calculadora/historial/historial.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { ListaTareaComponent } from './components/tareas/lista-tarea/lista-tarea.component';
import { ListaTareaItemComponent } from './components/tareas/lista-tarea-item/lista-tarea-item.component';
import { MaterialModule } from '../material/material.module';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { TareaFormComponent } from './components/tareas/tarea-form/tarea-form.component';
import { TareasComponent } from './page/tareas/tareas.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { BanderasComponent } from './page/banderas/banderas.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    BanderasComponent,
    CalculadoraComponent,
    CuentaComponent,
    HistorialComponent,
    LayoutPageComponent,
    ListaTareaComponent,
    ListaTareaItemComponent,
    SearchBoxComponent,
    SidebarComponent,
    TareaFormComponent,
    TareasComponent,
    TareasComponent,
    TareasComponent,
    CountryTableComponent,
    LoadingSpinnerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule
  ]
})
export class EjerciciosModule { }
