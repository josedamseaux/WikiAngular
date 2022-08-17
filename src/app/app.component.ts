import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article, SearchService } from './pages/search/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    article$ !: Observable<Article[]>
    constructor(private readonly searchSvc: SearchService){}


    onSearch(term: string): void {

      this.article$ = this.searchSvc.search(term);

      this.searchSvc.search(term)
      .pipe( 
       tap(res => console.log(res)))
       .subscribe();
     }
}
