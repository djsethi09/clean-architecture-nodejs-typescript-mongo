let buildMakeStudent = function (studentValidator: any) {
  return ({
    name,
    age,
    grade,
    prefect
  }: any = {}) => {
    let { error } = studentValidator({ name, age, grade, prefect })
    if (error) {
      throw new Error(error)
    } else {
      return {
        getName: () => name,
        getAge: () => age,
        getGrade: () => grade,
        isPrefect: () => prefect
      }
    }
  }
}

export default buildMakeStudent