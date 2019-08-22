import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employees: Employee[], filterText: string): Employee[] {
    if (!employees) return [];
    if (!filterText) return employees;

    return employees.filter(c => {
        return c.department_id == Number(filterText)
    });
  }

}
