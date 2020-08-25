import Student from '../../../db/mongodb/models/student';
import makeStudent from '../../../models/student/index'
import serialize from './serializer'


let listStudents = () => {
  return Student.find({})
    .then(serialize)
}

let findStudent = (prop: string, val: any) => {
  if (prop === 'id') {
    prop = '_id'
  }
  return Student.find({ [prop]: val })
    .then((resp: any) => {
      return serialize(resp[0])
    })
}

let findStudentsBy = (prop: string, val: any) => {
  return Student.find({ [prop]: val })
    .then(serialize)
}

let addStudent = (studentInfo: any) => {
  let student = makeStudent(studentInfo)
  let newStudent = {
    name: student.getName(),
    grade: student.getGrade(),
    age: student.getAge(),
    prefect: student.isPrefect()
  }
  return Student.create(newStudent)
    .then(serialize)
}

let deleteStudent = (id: string) => {
  return Student.findByIdAndDelete(id)
    .then((resp: any) => {
      return {
        id: resp._id.toString(),
        status: 'success'
      }
    })
    .catch((err: any) => {
      return {
        status: 'fail'
      }
    })
}

let dropAll = () => {
  return Student.remove()
}

export {
  listStudents,
  findStudent,
  findStudentsBy,
  addStudent,
  deleteStudent,
  dropAll
}

