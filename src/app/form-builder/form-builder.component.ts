import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormInput} from './form-builder.types';
import {INPUT_TYPE} from "./input-type.enum";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html'
})
export class FormBuilderComponent implements OnInit {

  @Input() public questions!: Array<FormInput>;

  @Input() public formGroup: FormGroup = new FormGroup({});

  public basicHtmlType = [INPUT_TYPE.TEXT, INPUT_TYPE.NUMBER, INPUT_TYPE.DATE, INPUT_TYPE.PASSWORD, INPUT_TYPE.EMAIL];

  public inputType = INPUT_TYPE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
