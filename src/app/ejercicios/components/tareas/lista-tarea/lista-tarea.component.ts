import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../../interfaces/tarea.interfaces';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styles: ``
})
export class ListaTareaComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaTareas: Tarea[] = [];

  constructor(){}

  /* public removeTarea(){
    if(!this.tarea) return;

    this.tareasService.removeTarea(this.tarea.id)
  } */

  onDeleteById(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id)
  }

}

