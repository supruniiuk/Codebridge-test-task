import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticlesPageComponent } from './articles-page.component';
import { ArticleService } from 'src/app/services/article.service';
import { EMPTY, Observable, of } from 'rxjs';
import { Article } from 'src/app/shared/interfaces/article.interface';

const mockedArticles: Article[] = [
  {
    id: 15154,
    title: 'Japan Air Self Defense Force awards contract to LeoLabs',
    url: 'https://spacenews.com/leolabs-contract-japan-ministry-of-defense/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2019/10/rsz_leolabs_kiwi_space_radar-250x250.png',
    newsSite: 'SpaceNews',
    summary:
      'Space mapping startup LeoLabs announced a multimillion-dollar contract May 24 to provide space domain awareness data, services and training to the Japan Air Self Dense Force.',
    publishedAt: '2022-05-24T13:23:19.000Z',
  },
  {
    id: 15155,
    title: 'New photo reveals a NASA spacecraft cloaked in Martian dust',
    url: 'https://arstechnica.com/science/2022/05/red-dust-has-completely-covered-nasas-seismic-spacecraft-on-mars/',
    imageUrl:
      'https://cdn.arstechnica.net/wp-content/uploads/2022/05/FTfVHrbX0AA7zXe.jpg',
    newsSite: 'Arstechnica',
    summary:
      'InSight lived up to its name, providing deep insights about the Martian interior.',
    publishedAt: '2022-05-24T13:20:30.000Z',
  },
];

describe('ArticlesPageComponent', () => {
  let component: ArticlesPageComponent;
  let aricleService: ArticleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesPageComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    aricleService = TestBed.inject(ArticleService);
    component = new ArticlesPageComponent(aricleService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls getArticles when ngOnInit', () => {
    const spy = spyOn(aricleService, 'getArticles').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('calls getArticleCounter when ngOnInit', () => {
    const spy = spyOn(aricleService, 'getArticlesCount').and.callFake(() => {
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

  it('gets total number of articles from getArticleCounter', () => {
    spyOn(aricleService, 'getArticlesCount').and.callFake(
      (): Observable<number> => {
        return of(100);
      }
    );

    component.ngOnInit();
    const count = component.totalArticles;
    expect(count).toBe(100);
  });

  it('gets number of articles from getArticles', () => {
    spyOn(aricleService, 'getArticles').and.callFake(
      (): Observable<Article[]> => {
        return of(mockedArticles);
      }
    );

    component.ngOnInit();
    const articles = component.articles;
    expect(articles.length).toBe(mockedArticles.length);
  });
});
