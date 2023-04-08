import { SelectProps } from '@mantine/core';

export enum FormType {
  INPUT = 'input',
  DATE = 'date',
  PERSON = 'person',
  NUMBER = 'number',
  SELECT = 'select',
}
export interface BaseGeneratorInterface {
  name: string;
  type?: FormType;
  label?: string;
  span?: number;
  isOptional?: boolean;
}

export type FormGeneratorInterface =
  | BaseGeneratorInterface
  | DateFormGeneratorInterface
  | (SelectProps & BaseGeneratorInterface);

export interface DateFormGeneratorInterface extends BaseGeneratorInterface {
  inputFormat?: string;
  labelFormat?: string;
}
