import express from 'express'
import dealerRouter from './dealers'
import adminRouter from './admin'
import authRouter from './auth'

const app = express()

app.use('/dealers/', dealerRouter)
app.use('/admin/', adminRouter)
app.use('/auth/', authRouter)

export default app
