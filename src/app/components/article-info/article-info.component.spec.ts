import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPTY } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';

import { ArticleInfoComponent } from './article-info.component';

describe('ArticleInfoComponent', () => {
  let component: ArticleInfoComponent;
  let articleService: ArticleService;
  let route: ActivatedRoute;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleInfoComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [Renderer2]
    }).compileComponents();

    articleService = TestBed.inject(ArticleService);
    route = TestBed.inject(ActivatedRoute);
    renderer = TestBed.inject(Renderer2);
    component = new ArticleInfoComponent(route, articleService, renderer);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls getArticleById when ngOnInit', () => {
    const spy = spyOn(articleService, 'getArticleById').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('collects all subscriptions', () => {
    component.ngOnInit();
    const subs = component.subs;
    expect(subs.length).toBe(2);
  });
});
