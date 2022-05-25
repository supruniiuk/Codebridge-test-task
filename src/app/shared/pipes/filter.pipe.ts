import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../interfaces/article.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  filterByField(
    array: Readonly<Article[]>,
    field: string,
    searchStr: string
  ) {
    return array.filter((item) => {
      return item[field]
        .toString()
        .toLowerCase()
        .includes(searchStr.toLowerCase());
    });
  }

  transform(array: Readonly<Article[]>, str = ''): Article[] {
    if (!str?.trim()) {
      return [...array];
    }

    const withoutTitleMatch = array.filter((item) => {
      return !item['title']
        .toString()
        .toLowerCase()
        .includes(str.toLowerCase());
    });

    const bySummary = this.filterByField(withoutTitleMatch, 'summary', str);

    return this.filterByField(array, 'title', str).concat(bySummary);
  }
}
