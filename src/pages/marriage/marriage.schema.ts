import Joi from 'joi';

export const marriageSchema = Joi.object({
  bride: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  groom: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  sponsor1: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  sponsor2: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  licenseNumber: Joi.string().required(),
  registryNumber: Joi.string().required(),
  remarks: Joi.string().required(),
  occasionDate: Joi.date().iso(),
  celebrantPriest: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  bookNumber: Joi.number().required(),
  pageNumber: Joi.number().required(),
});
