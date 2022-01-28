import {FormInput} from "../form-builder/form-builder.types";
import {INPUT_TYPE} from "../form-builder/input-type.enum";

export const basicFormDefinition = [
  {
    code: 'email',
    label: 'Email',
    type: INPUT_TYPE.EMAIL,
    placeholder: 'user@domain.com',
    bootstrapColSize: 6,
    description: 'Personal email',
    validators: {
      email: true,
      required: true
    }
  },
  {
    code: 'password',
    label: 'Password',
    type: INPUT_TYPE.PASSWORD,
    bootstrapColSize: 6,
    validators: {
      required: true
    }
  },
  {
    code: 'address',
    label: 'Address',
    type: INPUT_TYPE.TEXT,
    validators: {
      required: true
    }
  },
  {
    code: 'address2',
    label: 'Address 2',
    type: INPUT_TYPE.TEXT
  },
  {
    code: 'city',
    label: 'City',
    type: INPUT_TYPE.TEXT,
    bootstrapColSize: 6,
  },
  {
    code: 'state',
    label: 'State',
    type: INPUT_TYPE.SELECT,
    options: [
      {code: 'state1', label: 'State 1'},
      {code: 'state2', label: 'State 2'}
    ],
    bootstrapColSize: 4,
  },
  {
    code: 'zip',
    label: 'Zip',
    type: INPUT_TYPE.NUMBER,
    bootstrapColSize: 2,
  },
  {
    code: 'checkMeOut',
    label: 'Check me out',
    hideLabel: true,
    type: INPUT_TYPE.CHECKBOX
  },
  {
    code: 'description',
    label: 'Description',
    type: INPUT_TYPE.TEXTAREA
  }
] as FormInput[];
