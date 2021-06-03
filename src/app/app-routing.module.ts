import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailPageComponent } from './page/contact-detail-page/contact-detail-page.component';
import { ContactListPageComponent } from './page/contact-list-page/contact-list-page.component';
import { ContactsPageComponent } from './page/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },

  {
    path: 'contacts',
    component: ContactsPageComponent,
    children: [
      { path: '', component: ContactListPageComponent },
      { path: ':id', component: ContactDetailPageComponent },
      { path: 'new', component: ContactDetailPageComponent },
    ],
  },

  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
