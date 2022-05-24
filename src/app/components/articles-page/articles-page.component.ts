import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
})
export class ArticlesPageComponent implements OnInit {
  subs: Subscription[] = [];
  articles: Article[] = [];

  currentPage: number = 1;
  limit: number = 10;
  totalArticles: number

  constructor(private aricleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticleCounter();
    this.getAllArticles();
  }

  getAllArticles() {
    const articleSubscription = this.aricleService
      .getArticles(this.limit, this.currentPage)
      .subscribe((res) => {
        this.articles = res;
      });

    this.subs.push(articleSubscription);
  }

  getArticleCounter() {
    const countSubscription = this.aricleService
      .getArticlesCount()
      .subscribe((res) => {
        this.totalArticles = +res;
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
