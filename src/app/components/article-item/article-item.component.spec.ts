import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateSuffixPipe } from 'src/app/shared/pipes/date-suffix.pipe';
import { LimitSymbolsPipe } from 'src/app/shared/pipes/limit-symbols.pipe';

import { ArticleItemComponent } from './article-item.component';

describe('ArticleItemComponent', () => {
  let component: ArticleItemComponent;
  let fixture: ComponentFixture<ArticleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleItemComponent, DateSuffixPipe, LimitSymbolsPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    })
  });
});
