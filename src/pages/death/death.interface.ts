import { PersonInterface } from 'common/interfaces/person.interface';
import { PrettyDateInterface } from 'common/interfaces/pretty-date.interface';

export interface DeathInterface {
  readonly _id?: string;
  firstName: string;
  lastName: string;
  address: string;
  age: string;
  survivors: PersonInterface;
  burialDate: Date;
  readonly dateBurialString: PrettyDateInterface;
  placeBurial: string;
  sacraments: string;
  bookNumber: number;
  pageNumber: number;
  celebrantPriest: PersonInterface;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
