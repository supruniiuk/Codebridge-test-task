import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitSymbols',
})
export class LimitSymbolsPipe implements PipeTransform {
  transform(value: string, symbolsNum: number): string {
    if (value.length > symbolsNum) {
      return value.slice(0, symbolsNum) + '...';
    }
    return value;
  }
}
