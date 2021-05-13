import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expense'
})
export class ExpensePipe implements PipeTransform {

  private months: string[] = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  transform(value: number): string {
    if (value < 0 || value > 11)
      return 'Undefined Value';
    return this.months[value - 1];
  }

}