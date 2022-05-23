import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss'],
})
export class ArticleInfoComponent implements OnInit {
  @ViewChild('articleImg') articleImg;
  constructor(public router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.articleImg.nativeElement,
      'background',
      'center / cover no-repeat url(https://material.angular.io/assets/img/examples/shiba2.jpg)'
    );
  }
}
