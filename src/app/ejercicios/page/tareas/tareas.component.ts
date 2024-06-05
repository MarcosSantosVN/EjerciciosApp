import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../interfaces/tarea.interfaces';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: ``
})
export class TareasComponent {
  constructor(private tareasService: TareasService) { }

  get tareas(): Tarea[] {
    return [...this.tareasService.tareas];
  }

  deleteTareaById(id: string): void {
    this.tareasService.removeTarea(id);
  }

  addTarea(tarea: Tarea) {
    this.tareasService.addTarea(tarea)
  }

}
