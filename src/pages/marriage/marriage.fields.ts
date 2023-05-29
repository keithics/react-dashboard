import { FormGeneratorInterface, FormType } from 'components/form-generator/form-generator.interface';

const marriageFields: FormGeneratorInterface[] = [

  { name: 'bride', type: FormType.PERSON, span: 12 },
  { name: 'groom', type: FormType.PERSON, span: 12 },
  { name: 'sponsor1', type: FormType.PERSON, span: 12 },
  { name: 'sponsor2', type: FormType.PERSON, span: 12 },
  { name: 'licenseNumber' },
  { name: 'registryNumber' },
  { name: 'remarks' },
  { name: 'occasionDate', type: FormType.DATE },
  { name: 'celebrantPriest', type: FormType.PERSON, span: 12 },
  { name: 'bookNumber', type: FormType.NUMBER },
  { name: 'pageNumber', type: FormType.NUMBER },

];

export default marriageFields;
