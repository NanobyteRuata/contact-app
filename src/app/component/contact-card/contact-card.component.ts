import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact-model';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() {}

  ngOnInit(): void {}
}
