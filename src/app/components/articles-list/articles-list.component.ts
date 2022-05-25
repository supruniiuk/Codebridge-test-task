import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { Article } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  subs: Subscription[] = [];
  breakpoint: number;
  searchStr: string;

  widthGrid = {
    '768': 1,
    '1200': 2,
    '1550': 3,
  };

  constructor(private searchService: SearchService) {}

  @Input() articles: ReadonlyArray<Article>;

  ngOnInit() {
    this.breakpoint = this.setGrid();

    const filterSubscription = this.searchService.string.subscribe((str) => {
      this.searchStr = str;
    });

    this.subs.push(filterSubscription);
  }

  onResize(event: UIEvent) {
    const w = event.target as Window;
    this.breakpoint = this.setGrid(w);
  }

  setGrid(w: Window = window) {
    for (let width in this.widthGrid) {
      if (w.innerWidth < +width) {
        return this.widthGrid[width];
      }
    }
    return 4;
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
