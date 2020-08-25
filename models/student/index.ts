import buildMakeStudent from './student'
import studentSchema from './student-schema'
// let {studentValidator} = require('../../validator')
import validator from '../validator'
let studentValidator = validator(studentSchema)

let makeStudent = buildMakeStudent(studentValidator)

export default makeStudent

