import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact-model';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onDelete = new EventEmitter();

  isDeleteLoading: boolean = false;

  constructor(
    private _contactService: ContactService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onEditClick() {
    this._router.navigate([`/contacts/details/`, this.contact.id]);
  }

  async onDeleteClick() {
    this.isDeleteLoading = true;

    let result = await this._contactService.deleteContact(this.contact.id);

    this.isDeleteLoading = false;
    this.onDelete.emit({
      success: result.success,
      data: this.contact,
    });
  }
}
