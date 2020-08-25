import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser'
const app = express();
import routes from './routes'
import config from '../../config'

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)
app.get('/', (req: Request, res: Response, next: any) => {
  res.status(200).send('API Boilerplate, Clean Architecture in Typescript, Express, NodeJs, Mongo')
})
// === BOILERPLATE ===
// Catch and send error messages
app.use((err: any, req: Request, res: Response, next: any) => {
  if (err) {
    console.error(err.message)
    if (!err.statusCode) {
      err.statusCode = 500
    } // Set 500 server code error if statuscode not set
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }

  next()
})

// 404
app.use(function (req, res) {
  res.status(404).json({
    status: 'Page does not exist'
  });
});


const PORT = config.PORT || 8000

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})