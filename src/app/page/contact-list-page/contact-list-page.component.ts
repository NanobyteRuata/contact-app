import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact-model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss'],
})
export class ContactListPageComponent implements OnInit {
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

  onContactDelete = (event: any) => {
    if (event.success) {
      // delete from existing list without fetching all data again
      this.contactList = this.contactList.filter(
        (contact: Contact) => contact.id != event.data.id
      );
    }
  };
}
