import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstadoTarea, Tarea } from '../../../interfaces/tarea.interfaces';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styles: ``
})
export class TareaFormComponent {

  @Output()
  public onNewTarea: EventEmitter<Tarea> = new EventEmitter();

  public tareaForm = new FormGroup({
    id: new FormControl<string>(''),
    titulo: new FormControl<string>('', { nonNullable: true }),
    descripcion: new FormControl<string>(''),
    estado: new FormControl<EstadoTarea>(EstadoTarea.sinDefinir),
  });

  public estados = [
    { id: 'Sin definir', desc: 'Sin definir' },
    { id: 'Pendiente', desc: 'Pendiente' },
    { id: 'Completada', desc: 'Completada' }
  ];

  /* public estadoSelected?: EstadoTarea;  */

  constructor() { }

  get tareaActual(): Tarea{
    const tarea = this.tareaForm.value as Tarea;
    return tarea;
  }

  emitTarea(): void {

    if (this.tareaActual.titulo.length === 0) return;
/*     console.log(this.estadoSelected)
 */    this.onNewTarea.emit(this.tareaActual);


  }

}
