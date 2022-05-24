import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from '../shared/interfaces/article.interface';
import { RequestService } from '../shared/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  ROUTE: string = 'articles';
  public error$: Subject<string> = new Subject<string>();

  constructor(private requestService: RequestService) {}

  getArticles(limit: number, page: number): Observable<Article[]> {
    let skip = limit * (page - 1);
    skip = skip > 0 ? skip : 0;

    return this.requestService
      .get<Article[]>(this.ROUTE + `?_start=${skip}&_limit=${limit}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getArticlesCount(): Observable<number> {
    return this.requestService
      .get<Article[]>(this.ROUTE + `/count`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getArticleById(id: number): Observable<Article> {
    return this.requestService
      .get<Article>(this.ROUTE + `/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    this.error$.next(error.error.error);

    setTimeout(() => {
      this.error$.next('');
    }, 2000);
  }
}
