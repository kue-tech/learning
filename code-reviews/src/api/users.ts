import logger from '../logger'

export function GET(req, res, next) {
   logger('Endpoint GET request') // pass some event info here
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