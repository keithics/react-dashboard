import { LoaderFunctionArgs } from '@remix-run/router/utils';
import { ResponseInterface } from 'common/interfaces/request.interface';
import { FormGeneratorInterface } from 'components/form-generator/form-generator.interface';
import { Schema } from 'joi';

export type WithId = { _id: string };
export type TWithId<T> = T & WithId;

export interface CrudInterface<T> {
  add: (data: T) => Promise<T>;
  get: (params: LoaderFunctionArgs) => Promise<T>;
  update: (data: TWithId<T>) => Promise<T>;
  page: (paginationParams: LoaderFunctionArgs) => Promise<ResponseInterface<T>>;
  remove: (url: string) => Promise<void>;
  url: string;
}

export interface FormInterface<T> {
  schema: Schema;
  fields: FormGeneratorInterface[];
  redirectUrl: string;
}

export interface CrudFormInterface<T> extends FormInterface<T>, Pick<CrudInterface<T>, 'add' | 'update'> {}

export type CrudContextInterface<T> = Partial<Pick<CrudInterface<T>, 'url' | 'remove'>>;
