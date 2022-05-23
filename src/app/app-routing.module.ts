import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full',
  },
  { path: 'articles', component: ArticlesPageComponent },
  { path: 'articles/:id', component: ArticleInfoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
