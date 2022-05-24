import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  public get<T>(route: string): Observable<T> {
    return this.http
      .get<T>(this.createRoute(route));
  }

  private createRoute = (route: string) => {
    return `${environment.apiUrl}/${route}`;
  };
}
