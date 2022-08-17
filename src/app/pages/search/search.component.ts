import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { tap, pluck, map, debounceTime, distinctUntilChanged, filter } from "rxjs";

@Component({
  selector: 'app-search',
  template: `
    <div class="form form-group">
      <form>
        <div class="form-field">
          <input class="text" [formControl]="inputSearch" type="text" placeholder="search">
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
  //   this.inputSearch.valueChanges
  //   .pipe(
  //     tap(resp=> this.submitted.emit(resp))
  //   )
  //   .subscribe();
  // }

  this.inputSearch.valueChanges
    .pipe(
      map((search: string)=> search.trim()),
      debounceTime(250),
      distinctUntilChanged(),
      filter((search: string)=> search !== ''),
      tap((search: string) => this.submitted.emit(search))
    )
    .subscribe();
  }
}
