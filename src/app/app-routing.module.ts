import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PhoneListComponent} from './phone-directory/phone-list/phone-list.component';
import {PhoneContactComponent} from './phone-directory/phone-contact/phone-contact.component';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },{
    path: 'phone',
    component: PhoneListComponent
  },
  {
    path: 'phone/:id',
    component: PhoneContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
