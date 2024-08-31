import Joi from 'joi';

export const contactCreateShema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
});
