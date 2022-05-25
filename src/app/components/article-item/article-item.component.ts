import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { Article } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  subs: Subscription[] = [];
  src: string;

  @Input() article: Article = null;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    const searchFieldSubscription = this.searchService.string.subscribe(
      (value) => {
        this.src = value;
      }
    );

    this.subs.push(searchFieldSubscription);
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
