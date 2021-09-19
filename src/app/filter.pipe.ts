import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: any, search: string = ''): any {
    // if(!search.trim()) return countries;
    return countries.filter((country: any) => country.name.toLowerCase().includes(search.toLowerCase()))
  }

}
