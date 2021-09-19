import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Country {
  name: string,
  capital: string,
  flag?: string,
  nativeName: string,
  population: string,
  region: string  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  countries: any;

  country: Country = {
    name: '',
    capital: '',
    flag: '',
    nativeName: '',
    population: '',
    region: '' 
  };

  search = '';

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http
      .get('https://restcountries.eu/rest/v2/all')
      .subscribe((response) => {
        this.countries = response; });
  }

  showCountry(id: string) {
    this.country = this.countries.find((x: any) => x.name === id);
    this.search = '';
    
  }

}
