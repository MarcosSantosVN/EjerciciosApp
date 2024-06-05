import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { EstadoTarea, Tarea } from '../interfaces/tarea.interfaces';

@Injectable({ providedIn: 'root' })
export class TareasService {

  public tareas: Tarea[] = [
  ]

  constructor() {
    this.loadFromLocalStorage();
   }

  public addTarea(tarea: Tarea): void {
    const nueva: Tarea = { id: uuid(), titulo:tarea.titulo, descripcion: tarea.descripcion, estado:tarea.estado }
    this.tareas.push(nueva);
    this.updateLocalStorage();
  }

  public removeTarea(tareaId: string): void {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== tareaId);
    this.updateLocalStorage();
  }

  public updareEstado(todoId: string, estadoNuevo: EstadoTarea) {
    const todoIndex = this.tareas.findIndex((tarea) => tarea.id === todoId);

    if (todoIndex === -1) return;

    this.tareas[todoIndex].estado = estadoNuevo;

    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas))
  }

  private loadFromLocalStorage(): void {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }
}
