export enum FormType {
  INPUT = 'input',
  DATE = 'date',
  PERSON = 'person',
  NUMBER = 'number',
}
export interface BaseGeneratorInterface {
  name: string;
  type?: FormType;
  label?: string;
  span?: number;
  isOptional?: boolean;
}

export type FormGeneratorInterface = BaseGeneratorInterface | DateFormGeneratorInterface;

export interface DateFormGeneratorInterface extends BaseGeneratorInterface {
  inputFormat?: string;
  labelFormat?: string;
}
