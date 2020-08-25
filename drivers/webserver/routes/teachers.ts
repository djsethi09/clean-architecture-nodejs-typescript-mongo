import teachersDb from '../../../data-access/teachers-db'
import { Application, Request, Response } from 'express';
let teachers: any = {}

teachers.index = (req: Request, res: Response, next: any) => {
  teachersDb.listTeachers()
    .then((data: any) => {
      res.send(data)
    })
}

teachers.show = (req: Request, res: Response, next: any) => {
  teachersDb.findTeacher('id', req.params.id)
    .then((data: any) => {
      res.send(data)
    })
}

teachers.create = (req: Request, res: Response, next: any) => {
  teachersDb.addTeacher(req.body)
    .then((data: any) => {
      res.send(data)
    })
    .catch(next)
}
export default teachers