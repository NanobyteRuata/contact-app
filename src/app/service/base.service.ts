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
      .get(`${ApiConstants.BASE_URL}/${url}`)
      .toPromise()
      .then((res) => {
        return this.success(res);
      })
      .catch((err) => {
        console.log(err);
        return this.error(err);
      });
  }

  async post(url: string, data: any) {
    return this._http
      .post(`${ApiConstants.BASE_URL}/${url}`, data)
      .toPromise()
      .then((res) => {
        return this.success(res);
      })
      .catch((err) => {
        console.log(err);
        return this.error(err);
      });
  }

  async put(url: string, data: any) {
    return this._http
      .put(`${ApiConstants.BASE_URL}/${url}`, data)
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

  success(res: any): any {
    return {
      success: true,
      data: res,
    };
  }

  error(err: any): any {
    return {
      success: false,
      error: err,
    };
  }
}
