import { DeathInterface } from 'pages/death/death.interface';

export const deathDefault: DeathInterface = {
  dateBurialString: { day: '', month: '', ordinal: '', year: '' },
  firstName: '',
  lastName: '',
  address: '',
  age: '',
  survivors: {
    firstName: '',
    lastName: '',
  },
  survivors2: {
    firstName: '',
    lastName: '',
  },
  burialDate: new Date(),
  burialPlace: '',
  sacraments: '',
  bookNumber: 0,
  pageNumber: 0,
  celebrantPriest: {
    lastName: '',
    firstName: '',
  },
};
