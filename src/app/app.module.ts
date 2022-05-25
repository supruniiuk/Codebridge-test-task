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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorInterceptor } from './shared/error.interceptor';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from './state/articles/article.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleInfoComponent,
    ArticleItemComponent,
    ArticlesListComponent,
    ArticlesPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ articles: articlesReducer }),
  ],
  providers: [MatSnackBar, interceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
