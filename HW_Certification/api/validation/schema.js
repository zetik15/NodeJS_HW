const joi = require('joi');

const userScheme = joi.object ({
    name: joi.string().min(1).required(),
    sur_name: joi.string().min(2).required(),
    age: joi.number().min(1).required(),
    city: joi.string().min(1)
});

const userId = joi.object ({
    id: joi.number().required()
});

module.exports = { userScheme, userId };