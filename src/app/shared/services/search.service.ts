import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  #string = new BehaviorSubject<string>('');
  #count: number = 0;

  get string() {
    return this.#string;
  }

  set string(value: any) {
    this.#string.next(value);
  }

  get count() {
    return this.#count;
  }

  set count(value: number) {
    this.#count = value;
  }
}
