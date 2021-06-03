import { Component, OnInit } from '@angular/core';
import {
  faAddressBook,
  faPlus,
  faTimesCircle,
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
  faTimesCircle = faTimesCircle;

  isContactsLoading: boolean = false;
  contactList: any[] = [];

  constructor(private _contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  async getContacts() {
    this.isContactsLoading = true;
    this.contactList = [];

    let result: any = await this._contactService.getContacts();
    if (result.success) {
      this.contactList = result.data;
    } else {
      // TODO: Show error somehow
    }

    this.isContactsLoading = false;
  }
}
