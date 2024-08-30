import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width:75px;
    }`
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

  constructor(private matdialog: MatDialog) { }

  openModal(index: number): void {
    console.log(this.countries[index].name.common)
    this.matdialog.open(ModalComponent, {
      data: {
        nombre: this.countries[index].name.common,
        capital: this.countries[index].capital,
        poblacion: this.countries[index].population,
        moneda: Object.entries(this.countries[index].currencies),
        idioma: Object.entries(this.countries[index].languages)
      }
    })
  }

}
