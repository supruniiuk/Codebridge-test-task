import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSuffix',
})
export class DateSuffixPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);

    if (!value) {
      return '';
    }

    let months = [
      'January',
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
      'December',
    ];

    return `${months[date.getMonth()]} ${date.getDate()}${this.suffix(
      date.getDate())}, ${date.getFullYear()}`;
  }

  suffix(date) {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
