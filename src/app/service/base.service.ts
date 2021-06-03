import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private _http: HttpClient) {}

  get(url: string) {
    return this._http
      .get(url)
      .toPromise()
      .then((res) => {
        return {
          success: true,
          data: res,
        };
      })
      .catch((err) => {
        console.log(err);
        return {
          success: false,
          error: err,
        };
      });
  }
}
