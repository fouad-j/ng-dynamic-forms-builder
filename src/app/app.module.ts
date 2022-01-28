import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BasicFormComponent} from './basic-form/basic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    BasicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
