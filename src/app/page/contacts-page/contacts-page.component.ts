import { Component, OnInit } from '@angular/core';
import {
  faAddressBook,
  faPlus,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/model/contact-model';

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

  contactList: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}
}
