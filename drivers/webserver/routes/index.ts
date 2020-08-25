import express from 'express';
const router = express.Router()
import students from './students'
import teachers from './teachers'
router
  .get('/students', students.index)
  .get('/students/:id', students.show)
  .post('/students', students.create)

router
  .get('/teachers', teachers.index)
  .get('/teachers/:id', teachers.show)
  .post('/teachers', teachers.create)


export default router