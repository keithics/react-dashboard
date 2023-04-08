import { PersonInterface } from 'common/interfaces/person.interface';
import { PrettyDateInterface } from 'common/interfaces/pretty-date.interface';

export enum BaptismalConfirmation {
  BAPTISMAL = 'baptismal',
  CONFIRMATION = 'confirmation',
}

export interface BaptismalParams {
  params: {
    id: string;
  };
}

export interface BaptismalPaginationParams {
  params: {
    page: string;
  };
}

export interface BaptismalResponseInterface {
  currenPage: number;
  docs: BaptismalInterface[];
  totalPages: number;
}

export interface BaptismalInterface {
  readonly _id?: string;
  firstName: string;
  lastName: string;
  certificateType: string;
  address: string;
  parent1: PersonInterface;
  parent2: PersonInterface;
  celebrantPriest: PersonInterface;
  sponsor1: PersonInterface;
  sponsor2: PersonInterface;
  birthDate: Date;
  readonly birthDateString?: PrettyDateInterface;
  occasionDate: Date;
  readonly occasionDateString?: PrettyDateInterface;
  bookNumber: number;
  pageNumber: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
