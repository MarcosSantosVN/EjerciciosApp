import { Component } from '@angular/core';
import { Cuenta } from '../../components/calculadora/interfaces/cuenta.interface';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styles: ``
})
export class CalculadoraComponent {

  historial: Cuenta[] = [];

  addHisto(lastCalc: Cuenta) {
    this.historial.push(lastCalc);
    console.log(lastCalc.premisa, lastCalc.resultado);
  }
}
