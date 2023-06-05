import Joi from 'joi';

export const deathSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  address: Joi.string().required(),
  age: Joi.string().required(),
  survivors: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  survivors2: Joi.object({
    firstName: Joi.string().allow(''),
    lastName: Joi.string().allow(''),
  }),
  burialDate: Joi.date().iso(),
  burialPlace: Joi.string().required(),
  sacraments: Joi.string().required(),
  bookNumber: Joi.number().required(),
  pageNumber: Joi.number().required(),
  celebrantPriest: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
});
