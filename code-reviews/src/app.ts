import express from 'express'
import logger from './logger'
import {GET as getUsers} from './api/users'
import customLogger from "./logger";

const app = express()

app.get('/', getUsers)

app.listen(3000, () => {
   logger.info("App has been started...");
})