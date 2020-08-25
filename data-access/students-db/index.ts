import {
  listStudents,
  findStudent,
  findStudentsBy,
  addStudent,
  deleteStudent,
  dropAll
} from
  // = require('./memory/index') // switch out db as required
  './mongod/index'


let studentsDb = {
  listStudents,
  findStudent,
  findStudentsBy,
  addStudent,
  deleteStudent,
  dropAll
}

export default studentsDb
