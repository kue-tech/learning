import logger from '../logger'

export function GET(req, res, next) {
   // pass some event info here
   logger.log("debug", "Hello, World!");
   res.json([
      {
         id: 1,
         name: 'Greg',
         status: 'active',
         iq: 300
      },
      {
         id: 2,
         name: 'Daniela',
         status: 'inactive'
      },
      {
         id: 3,
         name: 'Iwona',
         status: 'active'
      }
   ])
}