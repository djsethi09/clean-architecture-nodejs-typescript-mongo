import mongoose from '../connection';

let Schema = mongoose.Schema
let StudentSchema = new Schema({
  name: String,
  age: Number,
  grade: Number,
  prefect: {
    type: Boolean,
    default: false
  }
})

let Student = mongoose.model('Student', StudentSchema)

export default Student