import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './modules/articles/articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  {
    path: 'articles',
    component: ArticlesComponent,
    loadChildren: () =>
      import('./modules/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
  },
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
