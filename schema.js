const Joi= require('joi');

const listingSchema = Joi.object({
    listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(500),
    image: Joi.string().allow("", null),
    category: Joi.string().required(),
  }).required(),
});
module.exports = listingSchema;