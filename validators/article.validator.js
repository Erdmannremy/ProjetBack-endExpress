const Validator = require('validator');

const titleValidator = (value: string) => {
  return Validator.isString(value) && value.length >= 3;
};

const contentValidator = (value: string) => {
  return Validator.isString(value) && value.length >= 10;
};

module.exports = {
  title: titleValidator,
  content: contentValidator
};
