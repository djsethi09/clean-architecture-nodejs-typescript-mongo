import buildMakeTeacher from './teacher'
import teacherSchema from './teacher-schema'
import validator from '../validator'
let teacherValidator = validator(teacherSchema)
// let {
//   teacherValidator
// } = require('../../validator')

let makeTeacher = buildMakeTeacher(teacherValidator)

export default makeTeacher

