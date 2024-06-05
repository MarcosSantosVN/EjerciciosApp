export interface Tarea {
  id: string;
  titulo: string,
  descripcion: string;
  estado: EstadoTarea;
}

export enum EstadoTarea {
  sinDefinir = 'Sin definir',
  pendiente = 'Pendiente',
  completada = 'Completada',
}
