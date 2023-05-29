import { PersonInterface } from 'common/interfaces/person.interface';
import { PrettyDateInterface } from 'common/interfaces/pretty-date.interface';

export interface MarriageInterface {
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly _id?: string;
  bride: PersonInterface;
  groom: PersonInterface;
  sponsor1: PersonInterface;
  sponsor2: PersonInterface;
  licenseNumber: String
  registryNumber: String
  remarks: String
  occasionDate: Date;
  occasionDateString: PrettyDateInterface;
  celebrantPriest: PersonInterface;
  bookNumber: number;
  pageNumber: number;
}
