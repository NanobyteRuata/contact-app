import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { ApiConstants } from '../constants/api-constants';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private _http: HttpClient) {}

  async get(url: string) {
    return this._http
      .get(`${ApiConstants.BASE_URL}/` + url)
      .toPromise()
      .then((res) => {
        return this.success(res);
      })
      .catch((err) => {
        console.log(err);
        return this.error(err);
      });
  }

  async delete(url: string) {
    return this._http
      .delete(`${ApiConstants.BASE_URL}/` + url)
      .toPromise()
      .then((res) => {
        return this.success(res);
      })
      .catch((err) => {
        console.log(err);
        return this.error(err);
      });
  }

  success(res: any) {
    return {
      success: true,
      data: res,
    };
  }

  error(err: any) {
    return {
      success: false,
      error: err,
    };
  }
}
