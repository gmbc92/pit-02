const Joi = require("joi");

const validateForm = (schema) => (data) => {
  const validation = schema.validate(data);

  if (validation.error) {
    throw new Error(validation.error);
  }
};

const userSchema = Joi.object({
  login: Joi.string().alphanum().min(3).max(30).required(),
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  phone: Joi.number().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  birthday: Joi.date().greater("1-1-1900"),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

const carSchema = Joi.object({
  year: Joi.number()
    .required()
    .positive()
    .max(new Date().getFullYear() + 1),
  licensePlate: Joi.string().required().max(8),
  model: Joi.string().required(),
  color: Joi.string().required(),
});

module.exports = {
  userSchema,
  carSchema,
  validateForm,
};
