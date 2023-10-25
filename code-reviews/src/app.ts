import express from 'express'
import logger from './logger'
import {GET as getUsers} from './api/users'

const app = express()

app.get('/', getUsers)

app.listen(3000, () => {
   // pass some event info here
   logger.log("info", "Hello, World!");
})