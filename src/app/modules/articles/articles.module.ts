import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { ArticlesComponent } from './articles.component';
import { FilterSearchComponent } from 'src/app/shared/components/filter-search/filter-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticleItemComponent,
    ArticlesListComponent,
    ArticleInfoComponent,
    ArticlesComponent,
    FilterSearchComponent
  ],
  imports: [ArticlesRoutingModule, CommonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule],
})
export class ArticlesModule {}
