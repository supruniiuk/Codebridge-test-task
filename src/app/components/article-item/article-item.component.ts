import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent {
  @Input() article: Article = null
}
