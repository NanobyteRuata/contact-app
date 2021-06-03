import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _baseService: BaseService) {}

  getContacts(keyword?: string) {
    return this._baseService.get(
      'contacts' +
        (keyword == null || keyword?.length == 0 ? '' : `?q=${keyword}`)
    );
  }

  deleteContact(id: number) {
    return this._baseService.delete(`contacts/${id}`);
  }
}
