let buildMakeStudent = function (studentValidator: any) {
  return ({
    name,
    age,
    grade,
    prefect = false
  }: any = {}) => {
    let { error } = studentValidator({ name, age, grade, prefect })
    if (error) throw new Error(error)

    return {
      getName: () => name,
      getAge: () => age,
      getGrade: () => grade,
      isPrefect: () => prefect
    }
  }
}

export default buildMakeStudent