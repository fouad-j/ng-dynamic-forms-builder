import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { BaseInput, FormValidators } from './form-builder.types';

export const createFormGroup = (formBuilder: FormBuilder, controls: BaseInput[]): FormGroup => {
  const form: FormGroup = formBuilder.group({});

  for (const control of controls) {
    const validators = getValidators(control.validators);
    form.addControl(control.code, formBuilder.control(control.value, validators));
  }

  return form;
};

export const getValidators = (formValidators: FormValidators | undefined): ValidatorFn[] => {
  if (!formValidators) {
    return [];
  }

  const validatorsToAdd: ValidatorFn[] = [];

  for (const [key, value] of Object.entries(formValidators)) {
    switch (key) {
      case 'min':
        validatorsToAdd.push(Validators.min(value));
        break;
      case 'max':
        validatorsToAdd.push(Validators.max(value));
        break;
      case 'required':
        validatorsToAdd.push(Validators.required);
        break;
      case 'requiredTrue':
        validatorsToAdd.push(Validators.requiredTrue);
        break;
      case 'email':
        validatorsToAdd.push(Validators.email);
        break;
      case 'minLength':
        validatorsToAdd.push(Validators.minLength(value));
        break;
      case 'maxLength':
        validatorsToAdd.push(Validators.maxLength(value));
        break;
      case 'pattern':
        validatorsToAdd.push(Validators.pattern(value));
        break;
      case 'nullValidator':
        validatorsToAdd.push(Validators.nullValidator);
        break;
      default:
        break;
    }
  }

  return validatorsToAdd;
};
