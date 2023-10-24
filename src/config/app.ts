import express from 'express'
import routerSetup from './routes'

const app = express()
// Configurando o Express
app.use(express.json()) // Configurando para receber JSON
routerSetup(app)

export default app
