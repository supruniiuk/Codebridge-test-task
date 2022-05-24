import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss'],
})
export class ArticleInfoComponent implements OnInit {
  subs: Subscription[] = [];
  articleId: number;
  article: Article;

  @ViewChild('articleImg') articleImg;
  
  constructor(public route: ActivatedRoute, private articleService: ArticleService, private renderer: Renderer2) {}

  ngOnInit(): void {
    const routeSubscription = this.route.params.subscribe(params => {
      this.articleId = +params.id;
      this.getArticleById(this.articleId)
    })

    this.subs.push(routeSubscription);
  }

  getArticleById(id: number) {
    const getArticleSubscription = this.articleService.getArticleById(id).subscribe((res) => {
      this.article = res;
      this.setBackground()
    })

    this.subs.push(getArticleSubscription)
  }

  setBackground() {
    this.renderer.setStyle(
      this.articleImg.nativeElement,
      'background',
      `center / cover no-repeat url(${this.article.imageUrl})`
    );
  }


  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
