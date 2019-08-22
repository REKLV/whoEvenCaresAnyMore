import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(employees: Employee[], filterText: string): Employee[] {
      if (!employees) return [];
      if (!filterText) return employees;

      return employees.filter(c => {
          return c.first_name.toLowerCase()
            .includes(filterText.toLowerCase());
      });
  }

}
