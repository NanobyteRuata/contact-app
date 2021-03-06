import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
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
  isInitialized: boolean = false;
  errorText: string = null;
  emailInvalidText: string = null;
  phoneInvalidText: string = null;
  contactForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contactService: ContactService,
    private _cdf: ChangeDetectorRef
  ) {
    this.contact = new Contact();
  }

  ngOnInit(): void {
    // according to "app-routing-module",
    // paramData will be null if navigated through "/contacts/new" path
    // and will have data if navigated through "/contacts/details/:id"
    let paramData: any = this._route.snapshot.paramMap.get('id');
    if (paramData != null) {
      this.getContactData(Number(paramData));
    } else {
      this.initializeForm();
    }
  }

  async getContactData(id: number) {
    this.isLoading = true;

    let result = await this._contactService.getContactById(id);
    if (result.success) {
      this.contact = result.data;
      this.initializeForm();
    } else {
      this.handleError(`There's no contact with id=${id}`);
    }

    this.isLoading = false;
    this._cdf.detectChanges();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.contact.phone, [
        Validators.required,
        Validators.minLength(8),
        this.phoneValidator(),
      ]),
    });
    this.isInitialized = true;
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get isNameInvalid() {
    return this.name.invalid && (this.name.dirty || this.name.touched);
  }
  get isEmailInvalid() {
    return (
      this.emailInvalidText ||
      (this.email.invalid && (this.email.dirty || this.email.touched))
    );
  }
  get isPhoneInvalid() {
    return (
      this.phoneInvalidText ||
      (this.phone.invalid && (this.phone.dirty || this.phone.touched))
    );
  }

  async onSaveClick(event: any) {
    this.isLoading = true;
    this.errorText = null;
    this.emailInvalidText = null;
    this.phoneInvalidText = null;

    // prepare data
    this.contact.name = this.name.value.trim();
    this.contact.email = this.email.value.trim();
    this.contact.phone = this.phone.value.trim();

    let result =
      this.contact.id == null
        ? await this._contactService.createContact(this.contact)
        : await this._contactService.updateContact(this.contact);
    if (result.success) {
      this._router.navigateByUrl('/contacts');
    } else {
      this.handleError(result.error);
    }

    this.isLoading = false;
    this._cdf.detectChanges();
  }

  // only accepts numbers, white space, "+" and "-"
  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let phoneRegex: RegExp = new RegExp(/^[-+\s/0-9]*$/);
      const forbidden = !phoneRegex.test(control.value);
      return forbidden ? { invalidPhone: { value: control.value } } : null;
    };
  }

  handleError(error: any) {
    this.errorText = error.message
      ? error.message
      : typeof error == 'string'
      ? error
      : JSON.stringify(error);
    this.showAlert = true;
  }
  showAlert: boolean = false;

  onCancelClick(event: any) {
    this._router.navigateByUrl('/contacts');
  }
}
