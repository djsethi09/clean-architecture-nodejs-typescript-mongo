let Joi = require('joi')

export default Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().error(() => { throw new Error('age must be a number') }),
  grade: Joi.number().error(() => { throw new Error('grade must be a number') }),
  prefect: Joi.boolean().error(() => { throw new Error('prefect must be a boolean') })
})
