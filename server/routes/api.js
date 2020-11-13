import express from 'express'
import dealerRouter from './dealers'
import actorRouter from './actor'
import authRouter from './auth'

const app = express()

app.use('/dealers/', dealerRouter)
app.use('/actor/', actorRouter)
app.use('/auth/', authRouter)

export default app
