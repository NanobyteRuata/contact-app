import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact-model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  contact: Contact;
  isLoading: boolean = false;
  errorText: string = null;
  nameInvalidText: string = null;
  emailInvalidText: string = null;
  phoneInvalidText: string = null;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contactService: ContactService
  ) {
    this.contact = new Contact();
  }

  ngOnInit(): void {
    let paramData: any = this._route.snapshot.paramMap.get('id');
    if (paramData != 'new') {
      this.initializeContact(Number(paramData));
    }
  }

  async initializeContact(id: number) {
    this.isLoading = true;

    let result = await this._contactService.getContactById(id);
    if (result.success) {
      this.contact = result.data;
    } else {
      this.handleError(result.error);
    }

    this.isLoading = false;
  }

  async onSaveClick(event: any) {
    event.preventDefault();

    this.errorText = null;
    this.nameInvalidText = null;
    this.emailInvalidText = null;
    this.phoneInvalidText = null;

    // validation
    let emailRegex: RegExp = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/
    );
    let phoneRegex: RegExp = new RegExp(/^[-+\s/0-9]*$/);
    if (this.contact.name == null || this.contact.name?.length == 0) {
      this.nameInvalidText = 'Name cannot be blank!';
      return;
    }
    if (this.contact.email == null || this.contact.email?.length == 0) {
      this.emailInvalidText = 'Email cannot be blank!';
      return;
    }
    if (!emailRegex.test(this.contact.email)) {
      this.emailInvalidText = 'Email is not valid!';
      return;
    }
    if (this.contact.phone == null || this.contact.phone?.length == 0) {
      this.phoneInvalidText = 'Phone cannot be blank!';
      return;
    }
    if (!phoneRegex.test(this.contact.phone)) {
      this.phoneInvalidText = 'Phone number is not valid!';
      return;
    }

    let result =
      this.contact.id == null
        ? await this._contactService.createContact(this.contact)
        : await this._contactService.updateContact(this.contact);
    if (result.success) {
      this._router.navigateByUrl('/contacts');
    } else {
      this.handleError(result.error);
    }
  }

  handleError(error: any) {
    this.errorText = error.message ? error.message : JSON.stringify(error);
  }

  onCancelClick(event: any) {
    this._router.navigateByUrl('/contacts');
  }
}
