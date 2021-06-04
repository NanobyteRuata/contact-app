import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private _contactService: ContactService,
    private _router: Router
  ) {}

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
      this.contactList = this.contactList.filter(
        (contact: Contact) => contact.id != event.data.id
      );
    }
  };
}
