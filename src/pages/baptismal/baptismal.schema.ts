import Joi from 'joi';

export const baptismalSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  birthDate: Joi.date().required(),
  occasionDate: Joi.date().required(),
  address: Joi.string().required(),
  parent1: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  parent2: Joi.object({
    firstName: Joi.string().allow(''),
    lastName: Joi.string().allow(''),
  }),
  celebrantPriest: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  sponsor1: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  sponsor2: Joi.object({
    firstName: Joi.string().allow(''),
    lastName: Joi.string().allow(''),
  }),
  bookNumber: Joi.number().required(),
  pageNumber: Joi.number().required(),
});
