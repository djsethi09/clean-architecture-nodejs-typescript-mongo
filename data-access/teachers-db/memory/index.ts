import TEACHERS from '../../../db/memory/teachers';
import makeTeacher from '../../../models/teacher/index'
import serialize from './serializer'
let listTeachers = () => {
  return Promise.resolve(serialize(TEACHERS))
}

let findTeacher = (prop: string, val: any) => {
  if (prop === 'id') {
    prop = 'serial'
  }
  let teacher = TEACHERS.find((teacher: any) => teacher[prop] == val)
  return Promise.resolve(serialize(teacher))
}

let addTeacher = (teacherInfo: any) => {
  let teacher = makeTeacher(teacherInfo)
  let newTeacher = {
    serial: TEACHERS.length + 1,
    class: teacher.getSubject(),
    tenure: teacher.isTenure(),
    name: 'ss'
  }
  TEACHERS.push(newTeacher)
  return findTeacher('serial', newTeacher.serial)
}

export {
  listTeachers,
  findTeacher,
  addTeacher
}

// let teachers = listTeachers() //?
// let bob = findTeacher('id', 1) //?
// addTeacher({
//   name: 'bill',
//   subject: 'boom',
//   grade: 1
// }) //?

// listTeachers() //?
