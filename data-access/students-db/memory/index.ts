import STUDENTS from '../../../db/memory/students'
import makeStudent from '../../../models/student/index'
import serialize from './serializer'

let listStudents = () => {
  return Promise.resolve(serialize(STUDENTS))
}

let findStudent = (prop: string, val: any) => {
  if (prop === 'id') { prop = 'serial' }
  let student = STUDENTS.find((student: any) => student[prop] == val)
  return Promise.resolve(serialize(student))
}

let findStudentsBy = (prop: string, val: any) => {
  if (prop === 'grade') { prop = 'year' }
  let student = STUDENTS.filter((student: any) => student[prop] == val)
  return Promise.resolve(serialize(student))
}

let addStudent = (studentInfo: any) => {
  let student = makeStudent(studentInfo)
  let newStudent = {
    serial: STUDENTS.length + 1,
    year: student.getGrade(),
    name: student.getName(),
    age: student.getAge(),
    prefect: student.isPrefect()
  }
  STUDENTS.push(newStudent)
  return findStudent('serial', newStudent.serial)
}

let deleteStudent = (id: string) => {
  return findStudent('id', id)
    .then((student: any) => {
      if (student.id == id) {
        let newStudents = STUDENTS.filter((student: any) => student.serial != id)
        return {
          id,
          status: 'success'
        }
      }
      return {
        status: 'fail'
      }
    })
}

let dropAll = () => {
  return [];
}

export {
  listStudents,
  findStudent,
  findStudentsBy,
  addStudent,
  deleteStudent,
  dropAll
}
