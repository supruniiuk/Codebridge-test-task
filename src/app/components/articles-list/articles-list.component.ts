import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/interfaces/article.interface';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  subs: Subscription[] = [];
  breakpoint: number;
  searchStr: string;
  sortedArticles: Article[];

  widthGrid = {
    '768': 1,
    '1200': 2,
    '1550': 3,
  };

  @Input() articles: ReadonlyArray<Article>;

  constructor(
    private searchService: SearchService,
    private filter: FilterPipe
  ) {}

  ngOnInit() {
    this.breakpoint = this.setGrid();

    const filterSubscription = this.searchService.string.subscribe((str) => {
      this.searchStr = str;

      this.sortedArticles = this.filter.transform(
        this.articles,
        this.searchStr
      );

      this.searchService.count = this.sortedArticles.length;
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
