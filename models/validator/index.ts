let validator = (schema: any) =>
  (payload: any) => {
    const { value, error } = schema.validate(payload);
    if (error) {
      let message = error.details.map((el: any) => el.message).join('\n')
      return {
        error: message
      }
    }
    return true
  }
export default validator