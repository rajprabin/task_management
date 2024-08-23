const Joi = require("joi");

const createTaskInputValidation = (req, res, next) => {
	const createTaskSchema = Joi.object({
		title: Joi.string().required(),
        description: Joi.string().required(),
        dueDate: Joi.date().required(),
        status: Joi.string(),
	});

	const validate = createTaskSchema.validate(req.body);
	if (validate.error) return next({ status: false, error: validate.error, errorCode: 400 })
	next();
}

const updateTaskInputValidation = (req, res, next) => {
	const updateTaskSchema = Joi.object({
		title: Joi.string(),
        description: Joi.string(),
        dueDate: Joi.date(),
        status: Joi.string().valid("PENDING","COMPLETED"),
	});

	const validate = updateTaskSchema.validate(req.body);
	if (validate.error) return next({ status: false, error: validate.error, errorCode: 400 })
	next();
}
module.exports = {
	createTaskInputValidation,
	updateTaskInputValidation
}