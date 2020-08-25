let Joi = require('joi')

let validator = (schema: any) =>
  async (payload: any) => {
    try {
      const value = await schema.validateAsync(payload);
    }
    catch (error) {
      let message = error.details.map((el: any) => el.message).join('\n')
      return {
        error: message
      }
    }
    return true
  }

export default validator