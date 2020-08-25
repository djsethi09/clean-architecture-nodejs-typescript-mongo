let buildMakeTeacher = function (teacherValidator: any) {
  return ({
    name,
    subject,
    tenure = false
  }: any = {}) => {
    let { error } = teacherValidator({ name, subject, tenure })
    if (error) throw new Error(error)

    return {
      getName: () => name,
      getSubject: () => subject,
      isTenure: () => tenure
    }
  }
}

export default buildMakeTeacher