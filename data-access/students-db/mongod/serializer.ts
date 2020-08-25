const _serializeSingle = (student: any) => {
  return {
    'id': student._id,
    'grade': student.grade,
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
