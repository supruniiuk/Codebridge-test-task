import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  { path: '', component: ArticlesPageComponent },
  { path: ':id', component: ArticleInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
