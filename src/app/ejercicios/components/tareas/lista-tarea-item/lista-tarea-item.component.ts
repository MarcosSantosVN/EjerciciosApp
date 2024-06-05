import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EstadoTarea, Tarea } from '../../../interfaces/tarea.interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { TareasService } from '../../../services/tareas.service';

@Component({
  selector: 'app-lista-tarea-item',
  templateUrl: './lista-tarea-item.component.html',
  styles: ``
})
export class ListaTareaItemComponent implements OnInit{

  @Output()
  public onDeleteItem: EventEmitter<string> = new EventEmitter();

  @Input()
  public tarea: Tarea = {
    id: '',
    titulo: '',
    descripcion: '',
    estado: EstadoTarea.sinDefinir
  }

  public estadoAntiguo?: EstadoTarea;

  public tareaForm = new FormGroup({
    id: new FormControl<string>(''),
    titulo: new FormControl<string>('', { nonNullable: true }),
    descripcion: new FormControl<string>(''),
    estado: new FormControl<EstadoTarea>(EstadoTarea.sinDefinir),
  });

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.estadoAntiguo = this.tarea.estado;
  }

  public estados = [
    { id: 'Sin definir', desc: 'Sin definir' },
    { id: 'Pendiente', desc: 'Pendiente' },
    { id: 'Completada', desc: 'Completada' }
  ];


  cambiarEstado(id: string, estadoActual: EstadoTarea) {

    if (this.estadoAntiguo !== estadoActual){
      this.tareasService.updareEstado(id, estadoActual);
      this.estadoAntiguo = estadoActual;
    }


  }

  onDeleteTarea(id?: string): void {
    if (!id) return;

    this.onDeleteItem.emit(id)
  }
}

