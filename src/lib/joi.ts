import { joiResolver } from '@mantine/form';
import { Schema } from 'joi';

export const customJoi = (schema: Schema) =>
  joiResolver(schema, { errors: { wrap: { label: '' } }, allowUnknown: true });
export const requiredObject = { 'string.empty': '{#label} is required' };
