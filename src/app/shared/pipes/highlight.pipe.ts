import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, searchStr: string): string {
    if (!searchStr) return value;

    const re = new RegExp(searchStr, 'igm');
    value = value.replace(re, '<span class="highlight">$&</span>');

    return value;
  }
}
