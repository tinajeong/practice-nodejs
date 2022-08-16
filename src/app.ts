import express, {Request, Response, NextFunction} from 'express'
import toDoRoutes from './routes/todos'
import {json} from 'body-parser'

const app = express()
app.use(json())
app.use('/todos', toDoRoutes)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message + req.body.toString()})
})
app.listen(3000)
