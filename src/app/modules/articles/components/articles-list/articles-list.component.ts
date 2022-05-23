import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  breakpoint: number;
  widthGrid = {
    '768': 1,
    '1200': 2,
    '1550': 3,
  };

  ngOnInit() {
    this.breakpoint = this.setGrid();
  }

  onResize(event: UIEvent) {
    const w = event.target as Window;
    this.breakpoint = this.setGrid(w);
  }

  setGrid(w: Window = window) {
    for (let width in this.widthGrid) {
      if (w.innerWidth < +width) {
        return this.widthGrid[width];
      }
    }
    return 4;
  }
}
