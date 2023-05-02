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
  burialDate: Joi.date().iso(),
  placeBurial: Joi.string().required(),
  sacraments: Joi.string().required(),
  bookNumber: Joi.number().required(),
  pageNumber: Joi.number().required(),
  celebrantPriest: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
});
