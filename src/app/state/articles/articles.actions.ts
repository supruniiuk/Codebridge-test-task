import { createAction, props } from '@ngrx/store';
import { Article } from '../../shared/interfaces/article.interface';

export const fetchArticleList = createAction(
  '[Articles List/API] Fetch Articles Success',
  props<{ articlesList: ReadonlyArray<Article> }>()
);

export const fetchTotalArticleСount = createAction(
  '[Articles Count/API] Fetch Articles Total Success',
  props<{ count: Readonly<number> }>()
);
