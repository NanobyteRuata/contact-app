import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ContactsPageComponent } from './page/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { ContactCardComponent } from './component/contact-card/contact-card.component';
import { ContactDetailPageComponent } from './page/contact-detail-page/contact-detail-page.component';
import { ContactListPageComponent } from './page/contact-list-page/contact-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsPageComponent,
    NotFoundPageComponent,
    ContactCardComponent,
    ContactDetailPageComponent,
    ContactListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
