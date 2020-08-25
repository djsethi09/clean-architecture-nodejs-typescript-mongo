const _serializeSingle = (student: any) => {
  return {
    'id': student.serial,
    'grade': student.year,
    'name': student.name,
    'age': student.age,
    'prefect': student.prefect
  };
};

const serializer = (data: any) => {
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(_serializeSingle)
  }
  return _serializeSingle(data)
}

export default serializer
