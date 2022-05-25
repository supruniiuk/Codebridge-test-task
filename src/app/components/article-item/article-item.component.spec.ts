import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { DateSuffixPipe } from 'src/app/shared/pipes/date-suffix.pipe';
import { HighlightPipe } from 'src/app/shared/pipes/highlight.pipe';
import { LimitSymbolsPipe } from 'src/app/shared/pipes/limit-symbols.pipe';

import { ArticleItemComponent } from './article-item.component';

describe('ArticleItemComponent', () => {
  let component: ArticleItemComponent;
  let searchService: SearchService;
  let fixture: ComponentFixture<ArticleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ArticleItemComponent,
        DateSuffixPipe,
        LimitSymbolsPipe,
        HighlightPipe,
      ],
    }).compileComponents();

    searchService = TestBed.inject(SearchService);
    component = new ArticleItemComponent(searchService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });

  it('calls getting search input', () => {
    const spy = spyOn(searchService, 'string').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('collects all subscriptions', () => {
    component.ngOnInit();
    const subs = component.subs;
    expect(subs.length).toBe(1);
  });
});
