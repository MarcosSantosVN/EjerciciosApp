import { Country } from "./country.interface"


export interface CacheStore{
  byCountries: TermCountries
}

export interface TermCountries{
  term: string,
  countries: Country[]
}

