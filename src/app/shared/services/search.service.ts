import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  #string = new BehaviorSubject<string>('');

  get string() {
    return this.#string;
  }

  set string(value: any) {
    this.#string.next(value);
  }
}
