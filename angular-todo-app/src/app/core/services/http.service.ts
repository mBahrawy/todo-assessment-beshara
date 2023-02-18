import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {}

  postRequest(path: string, data?: unknown): Observable<unknown> {
    return this.http
      .post(this.apiUrl + path, data)
      .pipe(
        map((res: unknown) => {
          return res;
        })
      );
  }

  getRequest(path: string): Observable<unknown> {
    return this.http
      .get(this.apiUrl + path)
      .pipe(
        map((res: unknown) => {
          return res;
        })
      );
  }

  putRequest(path: string, data?: unknown): Observable<unknown> {
    return this.http
      .put(this.apiUrl + path, data)
      .pipe(
        map((res: unknown) => {
          return res;
        })
      );
  }
  deleteRequest(path: string, data?: unknown): Observable<unknown> {
    return this.http
      .put(this.apiUrl + path, data)
      .pipe(
        map((res: unknown) => {
          return res;
        })
      );
  }


}
