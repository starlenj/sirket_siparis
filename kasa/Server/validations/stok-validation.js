const schema = Joi.object({
    name: Joi.string()
        .required(),

    type: Joi.string()
        .required(),

    sourceId: Joi.string(),

    tur: Joi.string().required()
})