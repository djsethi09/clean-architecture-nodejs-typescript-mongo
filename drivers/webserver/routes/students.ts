import studentsDb from '../../../data-access/students-db'
import { Application, Request, Response } from 'express';
let students: any = {}

students.index = (req: Request, res: Response, next: any) => {
  studentsDb.listStudents()
    .then((data: any) => {
      res.send(data)
    })
}

students.show = (req: Request, res: Response, next: any) => {
  studentsDb.findStudent('id', req.params.id)
    .then((data: any) => {
      res.send(data)
    })
}

students.create = (req: Request, res: Response, next: any) => {
  studentsDb.addStudent(req.body)
    .then((data: any) => {
      res.send(data)
    })
    .catch(next)
}
export default students