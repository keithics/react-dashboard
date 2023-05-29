import Joi from 'joi';
import { PersonInterface } from '../../common/interfaces/person.interface';
import { PrettyDateInterface } from '../../common/interfaces/pretty-date.interface';

export const marriageSchema = Joi.object({
  // firstName: Joi.string().required(),
  // lastName: Joi.string().required(),
  // address: Joi.string().required(),
  // age: Joi.string().required(),
  // survivors: Joi.object({
  //   firstName: Joi.string().required(),
  //   lastName: Joi.string().required(),
  // }),
  // burialDate: Joi.date().iso(),
  // burialPlace: Joi.string().required(),
  // sacraments: Joi.string().required(),

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
