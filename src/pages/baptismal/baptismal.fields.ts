import {FormGeneratorInterface, FormType} from 'components/form-generator/form-generator.interface';

const fields: FormGeneratorInterface[] = [
  { name: 'firstName' },
  { name: 'lastName' },
  { name: 'birthDate', type: FormType.DATE },
  { name: 'birth2Date', type: FormType.DATE },
  { name: 'occasionDate', type: FormType.DATE },
  { name: 'address', span: 12 },
  { name: 'parent1', type: FormType.PERSON, span: 12 },
  { name: 'parent2', type: FormType.PERSON, isOptional: true, span: 12 },
  { name: 'celebrantPriest', type: FormType.PERSON, span: 12 },
  { name: 'sponsor1', type: FormType.PERSON, span: 12 },
  { name: 'sponsor2', type: FormType.PERSON, isOptional: true, span: 12 },
  { name: 'bookNumber', type: FormType.NUMBER },
  { name: 'pageNumber', type: FormType.NUMBER },
];

export default fields;
