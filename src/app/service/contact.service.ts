import { Injectable } from '@angular/core';
import { Contact } from '../model/contact-model';
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

  getContactByEmail(email: string) {
    return this._baseService.get(`contacts?email=${email}`);
  }

  getContactByPhone(phone: string) {
    return this._baseService.get(
      `contacts?phone_like=${phone
        .split('+')
        .join('%2B')
        .split(' ')
        .join('%20')}`
    );
  }

  getContactById(id: number) {
    return this._baseService.get(`contacts/${id}`);
  }

  createContact(contact: Contact) {
    return this._baseService.post('contacts', contact);
  }

  updateContact(contact: Contact) {
    return this._baseService.put(`contacts/${contact.id}`, contact);
  }

  deleteContact(id: number) {
    return this._baseService.delete(`contacts/${id}`);
  }
}
