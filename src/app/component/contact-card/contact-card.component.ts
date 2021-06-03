import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact-model';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onDelete = new EventEmitter();

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  isDeleteLoading: boolean = false;

  constructor(private _contactService: ContactService) {}

  ngOnInit(): void {}

  onEditClick() {}

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
