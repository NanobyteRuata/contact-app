import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ApiConstants } from '../constants/api-constants';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _baseService: BaseService) {}

  getContacts() {
    return this._baseService.get(`${ApiConstants.BASE_URL}/contacts`);
  }
}
