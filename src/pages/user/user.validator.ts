import Joi from 'joi';
import { requiredObject } from 'lib/joi';

export const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages(requiredObject),
  password: Joi.string().required().messages(requiredObject),
  rememberMe: Joi.boolean().required(),
});
