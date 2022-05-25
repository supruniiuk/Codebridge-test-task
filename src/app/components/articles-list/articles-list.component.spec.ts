import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { SearchService } from 'src/app/shared/services/search.service';
import { ArticlesListComponent } from './articles-list.component';

describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;
  let searchService: SearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesListComponent, FilterPipe],
    }).compileComponents();

    searchService = TestBed.inject(SearchService);
    component = new ArticlesListComponent(searchService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('collects all subscriptions', () => {
    component.ngOnInit();
    const subs = component.subs;
    expect(subs.length).toBe(1);
  });

  it('calls getting search input', () => {
    const spy = spyOnProperty(searchService, 'string').and.callThrough();

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

});
