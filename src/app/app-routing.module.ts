import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicFormComponent} from "./basic-form/basic-form.component";

const routes: Routes = [
  {path: 'basic-form', component: BasicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
