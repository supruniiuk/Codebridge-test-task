import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticleInfoComponent,
    ArticleItemComponent,
    ArticlesListComponent,
    ArticlesPageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
