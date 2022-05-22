import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { ArticlesComponent } from './articles.component';

@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticleItemComponent,
    ArticlesListComponent,
    ArticleInfoComponent,
    ArticlesComponent,
  ],
  imports: [ArticlesRoutingModule, CommonModule],
})
export class ArticlesModule {}
