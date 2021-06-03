import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsPageComponent } from './page/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },

  { path: 'contacts', component: ContactsPageComponent },

  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
