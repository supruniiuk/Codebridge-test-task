import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LimitSymbolsPipe } from './pipes/limit-symbols.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DateSuffixPipe } from './pipes/date-suffix.pipe'; 

@NgModule({
  declarations: [FilterSearchComponent, LimitSymbolsPipe, DateSuffixPipe, DateSuffixPipe],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  exports: [
    FilterSearchComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    LimitSymbolsPipe,
    DateSuffixPipe,
    MatPaginatorModule
  ],
})
export class SharedModule {}
