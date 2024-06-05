import { Component, EventEmitter, Output } from '@angular/core';
import { Cuenta } from '../interfaces/cuenta.interface';

@Component({
  selector: 'app-calc-cuenta',
  templateUrl: './cuenta.component.html',
  styles: ''
})
export class CuentaComponent {

  @Output()
  public onNewResult: EventEmitter<Cuenta> = new EventEmitter();

  public cuenta: Cuenta = {
    premisa: '',
    resultado: ''
  }
  public flag: boolean = false;

  escribir(value: string, simbol: boolean): void {
    if (!simbol && this.flag) {
      this.cuenta.premisa = value;
    } else {
      this.cuenta.premisa += value;
    }
    this.flag = false;
  }

  limpiar(): void {
    this.cuenta.premisa = '';
  }

  borrar(): void {
    if (this.cuenta.premisa.length == 1 || this.flag) {
      this.cuenta.premisa = '';
      this.flag = false;
    } else {
      this.cuenta.premisa = this.cuenta.premisa.slice(0, -1);
    }
  }

  calcular(): void {
    if (this.cuenta.premisa.length == 0)
      this.cuenta.premisa = '0';

    try {
      this.cuenta.resultado = eval(this.cuenta.premisa);

    } catch {
      this.cuenta.resultado = "Error";
    }
    this.flag = true;

    this.onNewResult.emit({ ...this.cuenta });

    this.cuenta.premisa = this.cuenta.resultado;

  }

}
