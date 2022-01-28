import {INPUT_TYPE} from './input-type.enum';

export interface FormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: boolean;
}

export interface BaseInput {
  code: string;
  label: string;
  hideLabel?: boolean;
  type: INPUT_TYPE;
  value: string;
  description?: string;
  placeholder?: string;
  validators?: FormValidators;
  bootstrapColSize?: number; // col-12, col-6 ...
  options?: Array<CodeLabel>;
}

export interface TextInput extends BaseInput {
  type: INPUT_TYPE.TEXT;
}

export interface NumberInput extends BaseInput {
  type: INPUT_TYPE.NUMBER;
}

export interface EmailInput extends BaseInput {
  type: INPUT_TYPE.EMAIL;
}

export interface PasswordInput extends BaseInput {
  type: INPUT_TYPE.PASSWORD;
}

export interface RadioInput extends BaseInput {
  type: INPUT_TYPE.RADIO;
  options: Array<CodeLabel>;
}

export interface SelectInput extends BaseInput {
  type: INPUT_TYPE.SELECT;
  options: Array<CodeLabel>;
}

export interface CheckboxInput extends BaseInput {
  type: INPUT_TYPE.CHECKBOX;
}

export interface CodeLabel {
  code: string;
  label: string;
}

export type FormInput = SelectInput | TextInput | NumberInput | EmailInput | PasswordInput | RadioInput | CheckboxInput;
