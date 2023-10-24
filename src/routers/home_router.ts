import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/', (request, response) =>
    response.json({ ola: 'Esta é uma rota principal' }))
}
