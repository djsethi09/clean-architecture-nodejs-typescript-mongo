import knex from '../../../db/pg/knex'
import makeStudent from '../../../models/student/index'

let listStudents = () => {
  return knex.raw(`SELECT * FROM students;`)
    .then((data: any) => data.rows)
}

let findStudent = (prop: string, val: any) => {
  return knex.raw(`
    SELECT * FROM students WHERE ${prop}= '${val}'
  `)
    .then((data: any) => data.rows[0])
}

let findStudentsBy = (prop: string, val: any) => {
  return knex.raw(`
    SELECT * FROM students WHERE ${prop}= '${val}'
  `)
    .then((data: any) => data.rows)
}

let addStudent = (studentInfo: any) => {
  let student = makeStudent(studentInfo)
  let newStudent = {
    name: student.getName(),
    grade: student.getGrade(),
    age: student.getAge(),
    prefect: student.isPrefect()
  }
  return knex('students')
    .insert(newStudent)
    .returning('*')
    .then((result: any) => result[0])
}

let deleteStudent = (id: any) => {
  return knex('students')
    .where('id', id)
    .del()
    .then((resp: any) => {
      if (resp == 1) {
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
  return knex.raw(`
    DELETE FROM students;
    ALTER SEQUENCE students_id_seq RESTART WITH 1;
  `)
}

export {
  listStudents,
  findStudent,
  findStudentsBy,
  addStudent,
  deleteStudent,
  dropAll
}