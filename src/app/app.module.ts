import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from './shared/todo.service';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AutofocusDirective } from './shared/autofocus.directive';
import { TodoInsightComponent } from './todo/todo-insight/todo-insight.component';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';
import { PhoneListComponent } from './phone-directory/phone-list/phone-list.component';
import { PhoneContactComponent } from './phone-directory/phone-contact/phone-contact.component';
import {PagerDutyService} from './shared/pager-duty.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    AutofocusDirective,
    TodoInsightComponent,
    PhoneDirectoryComponent,
    PhoneListComponent,
    PhoneContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [TodoService, PagerDutyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
