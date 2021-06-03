import { Component, OnInit } from '@angular/core';
import {
  faAddressBook,
  faPlus,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/model/contact-model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  // icons
  faAddressBook = faAddressBook;
  faPlus = faPlus;
  faInfoCircle = faInfoCircle;

  isContactsLoading: boolean = false;
  isError: boolean = false;
  contactList: any[] = [];

  searchText: string = '';

  constructor(private _contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  async getContacts(keyword?: string) {
    this.isContactsLoading = true;
    this.contactList = [];

    let result: any = await this._contactService.getContacts(keyword);
    if (result.success) {
      this.contactList = result.data;
      this.isError = false;
    } else {
      this.isError = true;
    }

    this.isContactsLoading = false;
  }

  onSearchTextChange(value: string) {
    this.getContacts(value);
  }

  onContactDelete(event: any) {
    console.log('on contact delete: ', event);
    if (event.success) {
      this.contactList = this.contactList.filter(
        (contact: Contact) => contact.id != event.data.id
      );
    }
  }
}
