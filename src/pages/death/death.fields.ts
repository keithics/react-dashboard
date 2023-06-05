import { FormGeneratorInterface, FormType } from 'components/form-generator/form-generator.interface';

const deathFields: FormGeneratorInterface[] = [
  { name: 'firstName' },
  { name: 'lastName' },
  { name: 'address', span: 12 },
  { name: 'age' },
  { name: 'survivors', type: FormType.PERSON, span: 12 },
  { name: 'survivors2', type: FormType.PERSON, span: 12 },
  { name: 'burialDate', type: FormType.DATE },
  { name: 'burialPlace', span: 12 },
  { name: 'sacraments' },
  { name: 'celebrantPriest', type: FormType.PERSON, span: 12 },
  { name: 'bookNumber', type: FormType.NUMBER },
  { name: 'pageNumber', type: FormType.NUMBER },
];

export default deathFields;
