import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Article } from '../../shared/interfaces/article.interface';
import { fetchArticleList, fetchTotalArticleСount } from './articles.actions';

export interface ArticlesState {
  articlesList: ReadonlyArray<Article>;
  count: number;
}

export const initialState: ArticlesState = {
  articlesList: [],
  count: 0,
};

export const articlesReducer = createReducer(
  initialState,
  on(fetchArticleList, (state, { articlesList }) => ({
    ...state,
    articlesList,
  })),
  on(fetchTotalArticleСount, (state, { count }) => ({ ...state, count })),
);
