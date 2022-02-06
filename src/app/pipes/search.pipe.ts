import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: User[], searchValue: string): User[] {
    if (!searchValue.trim()) {
      return value
    }
    value = value.filter((val) => { return (val.firstName.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()) || val.lastName.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())) })
    return value;
  }

}
