import { MarriageInterface } from 'pages/marriage/marriage.interface';

export const marriageDefault: MarriageInterface = {
  bride: {
    firstName: '',
    lastName: '',
  },
  groom: {
    firstName: '',
    lastName: '',
  },
  sponsor1: {
    firstName: '',
    lastName: '',
  },
  sponsor2: {
    firstName: '',
    lastName: '',
  },
  licenseNumber: '',
  registryNumber: '',
  remarks: '',
  occasionDate: new Date(),
  occasionDateString: { day: '', month: '', ordinal: '', year: '' },
  celebrantPriest: {
    firstName: '',
    lastName: '',
  },
  bookNumber: 0,
  pageNumber: 0,
};
