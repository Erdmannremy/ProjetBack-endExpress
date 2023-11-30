const Joi = require('joi');

const articleValidator = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  authorId: Joi.string().required(),
});

module.exports = articleValidator;
