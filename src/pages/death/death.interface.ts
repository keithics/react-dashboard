import { PersonInterface } from 'common/interfaces/person.interface';
import { PrettyDateInterface } from 'common/interfaces/pretty-date.interface';

export interface DeathInterface {
  readonly _id?: string;
  firstName: string;
  lastName: string;
  address: string;
  age: string;
  survivors: PersonInterface;
  survivors2: PersonInterface;
  burialDate: Date;
  readonly dateBurialString: PrettyDateInterface;
  burialPlace: string;
  sacraments: string;
  bookNumber: number;
  pageNumber: number;
  celebrantPriest: PersonInterface;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
