import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss'],
})
export class FilterSearchComponent {

  constructor(private searchService: SearchService) {}
  searchText1 = '';

  handleChange(e: any) {
    this.searchService.string = e.target.value;
  }
}
