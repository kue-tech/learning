import express from 'express'
import logger from './logger'
import {GET as getUsers} from './api/users'

const app = express()

app.get('/', getUsers)

app.listen(3000, () => {
   logger.info(`Server running`, __filename);
   // ToAdd: on which port is server running?
})