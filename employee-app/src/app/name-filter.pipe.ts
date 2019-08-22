import { Pipe, PipeTransform } from '@angular/core';
import { City } from './city';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(cities: City[], filterText: string): City[] {
      if (!cities) return [];
      if (!filterText) return cities;

      return cities.filter(c => {
          return c.name.toLowerCase()
            .includes(filterText.toLowerCase());
      });
  }

}
