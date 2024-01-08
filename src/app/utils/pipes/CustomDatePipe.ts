import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeDatePipe',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return Intl.DateTimeFormat('pl').format(value);
    console.log(value);
  }
}
