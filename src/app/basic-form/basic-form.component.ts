import { Component, OnInit } from '@angular/core';
import {createFormGroup} from "../form-builder/form-builder";
import { FormInput } from '../form-builder/form-builder.types';
import {basicFormDefinition} from "./basic-form-definition";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html'
})
export class BasicFormComponent implements OnInit {

  public formDefinition: FormInput[] = basicFormDefinition;
  public formGroup: FormGroup = createFormGroup(this.formBuilder, basicFormDefinition);

  payLoad = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.formGroup.getRawValue(), null, 2);
  }
}
