import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styles: ``
})
export class BanderasComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;

  public initialValue: string = '';

  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountries.term;
  }

  searchByCountry(term: string) {

    this.isLoading = true;

    this.countriesServices.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false;
      });

  }

}

