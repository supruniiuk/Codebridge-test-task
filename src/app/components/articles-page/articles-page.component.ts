import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/shared/interfaces/article.interface';
import { fetchArticleList, fetchTotalArticleСount } from 'src/app/state/articles/articles.actions';
import { selectArticles, selectArticlesCount } from 'src/app/state/articles/articles.selectors';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
})
export class ArticlesPageComponent implements OnInit {
  articles$ = this.store.select(selectArticles);
  totalArticles$ = this.store.select(selectArticlesCount);

  subs: Subscription[] = [];
  arts: ReadonlyArray<Article>;

  currentPage: number = 1;
  limit: number = 10;

  constructor(private aricleService: ArticleService, private store: Store) {}

  ngOnInit(): void {
    this.getArticleCounter();
    this.getAllArticles();
  }

  getAllArticles() {
    const articleSubscription = this.aricleService
      .getArticles(this.limit, this.currentPage)
      .subscribe((articlesList) =>
        this.store.dispatch(fetchArticleList({ articlesList }))
      );

      this.subs.push(articleSubscription);
  }

  getArticleCounter() {
    const countSubscription = this.aricleService
      .getArticlesCount()
      .subscribe((count) => {
        this.store.dispatch(fetchTotalArticleСount({ count }))
      });

    this.subs.push(countSubscription);
  }

  handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex;
    this.limit = e.pageSize;
    this.getAllArticles();
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
