const _serializeSingle = (teacher: any) => {
  return {
    'id': teacher.serial,
    'name': teacher.name,
    'subject': teacher.class,
    'tenure': teacher.tenure
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
