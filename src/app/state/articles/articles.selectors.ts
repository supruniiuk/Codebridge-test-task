import { AppState } from '../app.state';

export const selectArticles = (state: AppState) => {
  return state.articles.articlesList;
};

export const selectArticlesCount = (state: AppState) => state.articles.count;
