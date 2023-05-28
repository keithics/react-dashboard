import { FormGeneratorInterface, FormType } from 'components/form-generator/form-generator.interface';

const fields: FormGeneratorInterface[] = [
  { name: 'headerLine1', span: 12 },
  { name: 'headerLine2', span: 12 },
  { name: 'headerLine3', span: 12 },
  { name: 'headerLine4', span: 12 },
  { name: 'headerLine5', span: 12 },
  { name: 'headerLine6', span: 12 },
  { name: 'currentPriest', span: 12 },
  { name: 'currentPriestSignature', span: 12, type: FormType.UPLOAD },
  { name: 'logo', span: 12, type: FormType.UPLOAD },
];

export default fields;
