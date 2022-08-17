import { Component, Input } from '@angular/core';
import { Article, SearchService } from '../search/services/search.service';

@Component({
  selector: 'app-article',
  template: `
  <article class="article mt-2">
  <a [href]="'https://es.wikipedia.org/?curid='+ article.pageid " target="_blank">
    {{article.title}}
  </a>
  <p [innerHTML]="article.snippet" class="mt-1"> {{article.snippet}} </p>
  </article>
  `,
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  constructor(public searchService: SearchService) { }

  @Input() article!: Article;

}
